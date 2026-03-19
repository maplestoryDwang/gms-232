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
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.npc_ChangeController(1540526, "oid=290861681", 530, 0, 18, 480, 580, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=290861681", "summon", 0, 0);
      cm.npc_ChangeController(1540453, "oid=290861683", 100, -250, 16, 50, 150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=290861683", "summon", 0, 0);
      cm.npc_ChangeController(1540611, "oid=290861684", 600, 0, 18, 550, 650, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=290861684", 'summon', 0, 0);
      cm.npc_ChangeController(1540613, "oid=290861685", 240, -266, 19, 190, 290, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=290861685", "summon", 0, 0);
      cm.npc_ChangeController(1540670, "oid=290861686", -470, -400, 15, -520, -420, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=290861686", "summon", 0, 0);
      cm.npc_ChangeController(1540676, "oid=290861688", -140, 0, 23, -190, -90, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=290861688", "summon", 0, 0);
      cm.npc_ChangeController(1540675, "oid=290861689", -140, -250, 16, -190, -90, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=290861689", 'summon', 0, 0);
      cm.npc_ChangeController(1540458, "oid=290861690", 700, 0, 18, 650, 750, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=290861690", 'summon', 0, 0);
      cm.npc_ChangeController(1540459, "oid=290861691", 800, 0, 18, 750, 850, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=290861691", 'summon', 0, 0);
      cm.npc_ChangeController(1540464, "oid=290861693", 900, 0, 17, 850, 950, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=290861693", "summon", 0, 0);
      cm.npc_ChangeController(1540461, "oid=290861694", 1000, 0, 22, 950, 1050, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=290861694", 'summon', 0, 0);
      cm.npc_ChangeController(1540462, "oid=290861695", -50, 0, 23, -100, 0, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=290861695", "summon", 0, 0);
      cm.npc_ChangeController(1540465, "oid=290861696", 40, 0, 23, -10, 90, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=290861696", "summon", 0, 0);
      cm.npc_ChangeController(1540463, "oid=290861698", 130, 0, 19, 80, 180, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=290861698", "summon", 0, 0);
      cm.npc_ChangeController(1540466, "oid=290861699", -21, -250, 16, -71, 29, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=290861699", "summon", 0, 0);
      cm.npc_ChangeController(1540457, "oid=290861700", 820, -130, 6, 770, 870, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=290861700", "summon", 0, 0);
      cm.npc_ChangeController(1540406, "oid=290861701", 920, -130, 6, 870, 970, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=290861701", 'summon', 0, 0);
      cm.npc_ChangeController(1540452, "oid=290861702", 320, 0, 19, 270, 370, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=290861702", 'summon', 0, 0);
      cm.npc_ChangeController(1540423, "oid=290861704", 1020, -130, 6, 970, 1070, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=290861704", "summon", 0, 0);
      cm.npcMove(1540670, -20, 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 300, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 420, 30);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#h0#？#h0#？", 37, 1540452, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#我知道如何唤醒晕倒的人。", 37, 1540616, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#等等，我先舒缓一下肩膀。", 37, 1540616, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("呃！等，等等……", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(4);
                    cm.emotion(38, 10000);
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.fieldEffect_PlayBGM("Bgm18/DrillHall", 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(0);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl"], [0, 0, 0, 1, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.emotion(0, 10000);
                        cm.inGameDirectionEvent_ForcedFlip(-1);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                          cm.sendNormalTalk_Bottom("？？？！", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("这是哪里……？", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("这里是黑色天堂的甲板。", 37, 1540452, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("多亏你的活跃表现，我们联盟才能占据这个地方。", 37, 1540452, true, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_ChangeController(1540674, "oid=290867370", 0, -150, 5, -50, 50, 0, false, 0, false);
                                  cm.npc_SetSpecialAction("oid=290867370", "summon", 0, 0);
                                  cm.npc_ChangeController(1540642, "oid=290867371", 0, -30, 14, -50, 50, 0, true, 0, false);
                                  cm.npc_SetSpecialAction("oid=290867371", "summon", 0, 0);
                                  cm.npc_ChangeController(1540643, "oid=290867372", 0, -30, 14, -50, 50, 0, true, 0, false);
                                  cm.npc_SetSpecialAction("oid=290867372", "summon", 0, 0);
                                  cm.npc_ChangeController(1540644, "oid=290867373", 0, -30, 14, -50, 50, 0, true, 0, false);
                                  cm.npc_SetSpecialAction("oid=290867373", "summon", 0, 0);
                                  cm.npcMove(1540674, -300, -50, 0);
                                  cm.npcMove(1540642, -800, -300, 0);
                                  cm.npcMove(1540643, -900, -230, 0);
                                  cm.npcMove(1540644, -900, -370, 0);
                                  cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 420, -80);
                                } else {
                                  if (status === V++) {
                                    cm.npcMove(1540674, 2500, 0, 10000);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.npcMove(1540642, 2500, 0, 3500);
                                        cm.npcMove(1540643, 2500, 0, 3500);
                                        cm.npcMove(1540644, 2500, 0, 3500);
                                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 420, 30);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom('啊啊……这样啊。', 57, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("吉格蒙特，是你救了我。", 57, 0, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom('…………', 37, 1540452, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("我没资格接受你的感谢。", 37, 1540452, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#喂，我说！这种沉闷的对话就说到这里吧。", 37, 1540616, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0##h0#，所幸你平安无事。", 37, 1540616, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                            cm.inGameDirectionEvent_ForcedFlip(1);
                                                            cm.sendNormalTalk_Bottom("#face0#听说这段时间因为我们发生了很多事？", 37, 1540616, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("贝尔？韩利泰？切奇？这究竟是怎么回事？", 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#我们从#b当年的风云人物#k那里获得了帮助。", 37, 1540611, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#在那种情况下能够救出我们的飞行家，在冒险岛世界只有一个。", 37, 1540611, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                      cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -446, -300);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom('呼。', 37, 1540670, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("我对格里梅尔那家伙非常了解，我就知道他会设下陷阱。", 37, 1540670, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom('你是？', 57, 0, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 120, 0, 0, 0, 500, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_ScreenMsg("Map/Effect2.img/flowervioleta/bird2");
                                                                                  cm.sendNormalTalk_Bottom('……', 37, 1540670, false, true);
                                                                                  cm.effect_PlayMusic("Field.img/flowervioleta/bird");
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 420, 30);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("我已经从#b古皮，德皮，莉皮#k三兄妹那里听说了。", 37, 1540452, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#b黑色天堂与斯乌相连#k，还有……", 37, 1540452, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("你通过机械坟墓潜入了这里等等。", 37, 1540452, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("……我代表这里所有人道歉。\r\n很抱歉，是我们误会了你。", 37, 1540452, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 550, 30);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_ChangeController(1540450, "oid=290879655", 920, -130, 6, 870, 970, 1, true, 0, false);
                                                                                                          cm.npc_SetSpecialAction("oid=290879655", 'summon', 0, 0);
                                                                                                          cm.npc_ChangeController(1540451, "oid=290879656", 1020, -130, 6, 970, 1070, 1, true, 0, false);
                                                                                                          cm.npc_SetSpecialAction("oid=290879656", "summon", 0, 0);
                                                                                                          cm.npc_SetForceMove("oid=290879655", -1, 230, 100);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_SetForceMove("oid=290879656", -1, 230, 100);
                                                                                                            cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#h0#，所幸你平安无事。", 37, 1540450, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_SetSpecialAction("oid=290879655", "smile", 0, 1);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("我们之所以能够奠定潜入黑色天堂内部的基础，都是你的功劳。", 37, 1540451, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("…………说实话我很吃惊。\r\n如果没有你，这件事根本不可能实现。", 37, 1540451, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("各位联盟成员，战争还没有结束。", 37, 1540450, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 380, 30);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("我们要齐心协力，共同面对黑暗。", 37, 1540452, false, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#fs25##face1#齐心协力！", 37, 1540452, false, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##fs25#齐心协力！", 37, 1540450, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 420, -80);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
                                                                                                                                            cm.npc_SetSpecialAction("oid=290861688", "cheer", -1, 1);
                                                                                                                                            cm.npc_SetSpecialAction("oid=290861689", 'cheer', -1, 1);
                                                                                                                                            cm.npc_SetSpecialAction("oid=290861690", "cheer", -1, 1);
                                                                                                                                            cm.npc_SetSpecialAction("oid=290861691", "cheer", -1, 1);
                                                                                                                                            cm.npc_SetSpecialAction("oid=290861693", "cheer", -1, 1);
                                                                                                                                            cm.npc_SetSpecialAction("oid=290861694", 'cheer', -1, 1);
                                                                                                                                            cm.npc_SetSpecialAction("oid=290861695", "cheer", -1, 1);
                                                                                                                                            cm.npc_SetSpecialAction("oid=290861696", 'cheer', -1, 1);
                                                                                                                                            cm.npc_SetSpecialAction("oid=290861698", "cheer", -1, 1);
                                                                                                                                            cm.npc_SetSpecialAction("oid=290861699", "cheer", -1, 1);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
                                                                                                                                              cm.npc_SetSpecialAction("oid=290861688", "cheer", -1, 1);
                                                                                                                                              cm.npc_SetSpecialAction("oid=290861689", "cheer", -1, 1);
                                                                                                                                              cm.npc_SetSpecialAction("oid=290861690", "cheer", -1, 1);
                                                                                                                                              cm.npc_SetSpecialAction("oid=290861691", "cheer", -1, 1);
                                                                                                                                              cm.npc_SetSpecialAction("oid=290861693", "cheer", -1, 1);
                                                                                                                                              cm.npc_SetSpecialAction("oid=290861694", "cheer", -1, 1);
                                                                                                                                              cm.npc_SetSpecialAction("oid=290861695", "cheer", -1, 1);
                                                                                                                                              cm.npc_SetSpecialAction("oid=290861696", "cheer", -1, 1);
                                                                                                                                              cm.npc_SetSpecialAction("oid=290861698", "cheer", -1, 1);
                                                                                                                                              cm.npc_SetSpecialAction("oid=290861699", "cheer", -1, 1);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                                                                                                              cm.effect_NormalSpeechBalloon("#fs25##fn黑体##h0#！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 1540459, cm.getPlayer().getId());
                                                                                                                                              cm.effect_NormalSpeechBalloon("#fs25##fn黑体##h0#！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 1540464, cm.getPlayer().getId());
                                                                                                                                              cm.effect_NormalSpeechBalloon("#fs25##fn黑体##h0#！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 1540465, cm.getPlayer().getId());
                                                                                                                                              cm.effect_NormalSpeechBalloon("#fs25##fn黑体##h0#！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 1540466, cm.getPlayer().getId());
                                                                                                                                              cm.effect_NormalSpeechBalloon("#fs25##fn黑体##h0#！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 1540676, cm.getPlayer().getId());
                                                                                                                                              cm.effect_NormalSpeechBalloon("#fs25##fn黑体##h0#！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 1540458, cm.getPlayer().getId());
                                                                                                                                              cm.effect_NormalSpeechBalloon("#fs25##fn黑体##h0#！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 1540461, cm.getPlayer().getId());
                                                                                                                                              cm.effect_NormalSpeechBalloon("#fs25##fn黑体##h0#！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 1540462, cm.getPlayer().getId());
                                                                                                                                              cm.effect_NormalSpeechBalloon("#fs25##fn黑体##h0#！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 1540463, cm.getPlayer().getId());
                                                                                                                                              cm.effect_NormalSpeechBalloon("#fs25##fn黑体##h0#！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 1540675, cm.getPlayer().getId());
                                                                                                                                              cm.effect_NormalSpeechBalloon("#fs25##fn黑体##h0#！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 1540457, cm.getPlayer().getId());
                                                                                                                                              cm.effect_NormalSpeechBalloon("#fs25##fn黑体##h0#！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 1540406, cm.getPlayer().getId());
                                                                                                                                              cm.effect_NormalSpeechBalloon("#fs25##fn黑体##h0#！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 1540423, cm.getPlayer().getId());
                                                                                                                                              cm.effect_NormalSpeechBalloon("#fs25##fn黑体##h0#！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 1540453, cm.getPlayer().getId());
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.npc_LeaveField("oid=290861681");
                                                                                                                                                  cm.npc_LeaveField("oid=290861681");
                                                                                                                                                  cm.npc_LeaveField("oid=290861683");
                                                                                                                                                  cm.npc_LeaveField("oid=290861683");
                                                                                                                                                  cm.npc_LeaveField("oid=290861684");
                                                                                                                                                  cm.npc_LeaveField("oid=290861684");
                                                                                                                                                  cm.npc_LeaveField("oid=290861685");
                                                                                                                                                  cm.npc_LeaveField("oid=290861685");
                                                                                                                                                  cm.npc_LeaveField("oid=290861686");
                                                                                                                                                  cm.npc_LeaveField("oid=290861686");
                                                                                                                                                  cm.npc_LeaveField("oid=290861688");
                                                                                                                                                  cm.npc_LeaveField("oid=290861688");
                                                                                                                                                  cm.npc_LeaveField("oid=290861689");
                                                                                                                                                  cm.npc_LeaveField("oid=290861689");
                                                                                                                                                  cm.npc_LeaveField("oid=290861690");
                                                                                                                                                  cm.npc_LeaveField("oid=290861690");
                                                                                                                                                  cm.npc_LeaveField("oid=290861691");
                                                                                                                                                  cm.npc_LeaveField("oid=290861691");
                                                                                                                                                  cm.npc_LeaveField("oid=290861693");
                                                                                                                                                  cm.npc_LeaveField("oid=290861693");
                                                                                                                                                  cm.npc_LeaveField("oid=290861694");
                                                                                                                                                  cm.npc_LeaveField("oid=290861694");
                                                                                                                                                  cm.npc_LeaveField("oid=290861695");
                                                                                                                                                  cm.npc_LeaveField("oid=290861695");
                                                                                                                                                  cm.npc_LeaveField("oid=290861696");
                                                                                                                                                  cm.npc_LeaveField("oid=290861696");
                                                                                                                                                  cm.npc_LeaveField("oid=290861698");
                                                                                                                                                  cm.npc_LeaveField("oid=290861698");
                                                                                                                                                  cm.npc_LeaveField("oid=290861699");
                                                                                                                                                  cm.npc_LeaveField("oid=290861699");
                                                                                                                                                  cm.npc_LeaveField("oid=290879655");
                                                                                                                                                  cm.npc_LeaveField("oid=290879655");
                                                                                                                                                  cm.npc_LeaveField("oid=290879656");
                                                                                                                                                  cm.npc_LeaveField("oid=290879656");
                                                                                                                                                  cm.npc_LeaveField("oid=290861700");
                                                                                                                                                  cm.npc_LeaveField("oid=290861700");
                                                                                                                                                  cm.npc_LeaveField("oid=290861701");
                                                                                                                                                  cm.npc_LeaveField("oid=290861701");
                                                                                                                                                  cm.npc_LeaveField("oid=290861702");
                                                                                                                                                  cm.npc_LeaveField("oid=290861702");
                                                                                                                                                  cm.npc_LeaveField("oid=290861704");
                                                                                                                                                  cm.npc_LeaveField("oid=290861704");
                                                                                                                                                  cm.npc_LeaveField("oid=290867370");
                                                                                                                                                  cm.npc_LeaveField("oid=290867370");
                                                                                                                                                  cm.npc_LeaveField("oid=290867371");
                                                                                                                                                  cm.npc_LeaveField("oid=290867371");
                                                                                                                                                  cm.npc_LeaveField("oid=290867372");
                                                                                                                                                  cm.npc_LeaveField("oid=290867372");
                                                                                                                                                  cm.npc_LeaveField("oid=290867373");
                                                                                                                                                  cm.npc_LeaveField("oid=290867373");
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.fieldEffect_PlayBGM("Bgm22/UndergroundPlace", 0, 0);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("终于……", 37, 1540460, false, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("找到了。", 37, 1540460, false, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                              } else if (status === V++) {
                                                                                                                                                                cm.dispose();
                                                                                                                                                                cm.warp(350044000, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;