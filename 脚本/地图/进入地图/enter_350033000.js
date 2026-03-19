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
      cm.gainSkillBuff(80001586);
      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3));
      cm.forceCompleteQuest(33175);
      cm.gainExp(Math.pow(cm.getLevel(), 3));
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.forceCompleteQuest(33190);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1540614, "oid=22500170", -3500, -500, 113, -3550, -3450, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22500170", "summon", 0, 0);
      cm.npc_ChangeController(1540615, "oid=22500171", -3400, -360, 5, -3450, -3350, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22500171", "summon", 0, 0);
      cm.npc_ChangeController(1540616, "oid=22500172", -3500, -270, 119, -3550, -3450, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22500172", "summon", 0, 0);
      cm.npc_ChangeController(1540620, "oid=22500173", 0, -100, 215, -50, 50, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=22500173", "summon", 0, 0);
      cm.npc_ChangeController(1540621, "oid=22500174", 530, -100, 219, 480, 580, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=22500174", "summon", 0, 0);
      cm.npcMove(1540620, 0, 300, 0);
      cm.npcMove(1540621, 0, 300, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 5000, -3458, -209);
      cm.curNodeEventEnd(true);
      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#在别动队中，我们好像是最先到达的。", 37, 1540615, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#好了，那谁先享受到达黑色天堂上面的荣光呢？", 37, 1540616, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#女士优先。", 37, 1540615, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#嘁，只有这种时候才是女士优先吧？", 37, 1540616, true, true);
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
                      cm.sendNormalTalk_Bottom("#face0#啊，我看到了甲板。", 37, 1540614, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#与我们预想的一样，这里是警备的开始地带。", 37, 1540615, true, true);
                      } else {
                        if (status === V++) {
                          cm.cameraSwitch_PushSwitchMoveToPos(0, -150, 3500);
                          cm.npc_SetForceMove("oid=22500170", 1, 1500, 240);
                          cm.npc_SetForceMove("oid=22500171", 1, 1500, 240);
                          cm.npc_SetForceMove("oid=22500172", 1, 1500, 240);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_MoveAction(2);
                            cm.inGameDirectionEvent_AskAnswerTime(8000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_MoveAction(0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#那我先上去吧。", 37, 1540615, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#你不是说女士优先吗？", 37, 1540616, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#我怎么会让女士先到那么危险的地方去呢。", 37, 1540615, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=22500171", 1, 1000, 250);
                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=22500170", 1, 1000, 240);
                                        cm.npc_SetForceMove("oid=22500172", 1, 1000, 240);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_MoveAction(2);
                                          cm.inGameDirectionEvent_AskAnswerTime(4500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_MoveAction(0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                              cm.sendNormalTalk_Bottom("嘿嘿嘿，哪来的臭苍蝇啊！", 37, 1540470, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayBGM("Bgm18.img/BlackWing", 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  cm.effect_NormalSpeechBalloon("#fn黑体##fs22#!!!", 1, 0, 0, 3500, 1, 0, 0, 0, 4, 1540614, cm.getPlayer().getId());
                                                  cm.effect_NormalSpeechBalloon("#fn黑体##fs22#!!!", 1, 0, 0, 3500, 1, 0, 0, 0, 4, 1540615, cm.getPlayer().getId());
                                                  cm.effect_NormalSpeechBalloon("#fn黑体##fs22#!!!", 1, 0, 0, 3500, 1, 0, 0, 0, 4, 1540616, cm.getPlayer().getId());
                                                } else {
                                                  if (status === V++) {
                                                    cm.userSetFieldFloating(350033000, 5, 5, 50);
                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.setAmbience("Ambience.img/electronic", 100, 60);
                                                      cm.npc_SetSpecialAction("oid=22500170", 'barrier', -1, 1);
                                                      cm.npc_SetSpecialAction("oid=22500171", "barrier", -1, 1);
                                                      cm.npc_SetSpecialAction("oid=22500172", "barrier", -1, 1);
                                                      cm.forceForfeitQuest(33190);
                                                      cm.forceStartQuest(33190, '');
                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.forceCompleteQuest(33190);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.setAmbience("Ambience.img/electronic", 30, 60);
                                                          cm.sendNormalTalk_Bottom("#face0#咳，动不了了！", 37, 1540615, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#格里梅尔……怎么会这样？！", 37, 1540614, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("你问我是怎么知道你们的计划的？那可是秘~密，咦嘿嘿嘿嘿！", 37, 1540470, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.userSetFieldFloating(350033000, 0, 0, 0);
                                                                cm.inGameDirectionEvent_PushMoveInfo(0, 1500, 230, -59);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayFieldSound("BlackHeaven/4", 100);
                                                                    cm.npcMove(1540620, 0, -300, 8000);
                                                                    cm.npcMove(1540621, 0, -300, 8000);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(10000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_PlayFieldSound("BlackHeaven/5", 100);
                                                                      cm.npc_SetSpecialAction("oid=22500173", 'ready', 0, 1);
                                                                      cm.npc_SetSpecialAction("oid=22500174", "ready", 0, 1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_ChangeController(1540622, "oid=22505954", 0, -100, 215, -50, 50, 1, false, 0, false);
                                                                        cm.npc_SetSpecialAction("oid=22505954", "summon", 0, 0);
                                                                        cm.npc_ChangeController(1540623, "oid=22505955", 530, -100, 219, 480, 580, 1, false, 0, false);
                                                                        cm.npc_SetSpecialAction("oid=22505955", "summon", 0, 0);
                                                                        cm.npc_LeaveField("oid=22500173");
                                                                        cm.npc_LeaveField("oid=22500173");
                                                                        cm.npc_LeaveField("oid=22500174");
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_PushMoveInfo(0, 5000, -900, -250);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0##h0#，请快撤退！", 37, 1540614, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#作战被发现了。他们早就知道我们会来！\r\n必须有人将这件事告诉大家！", 37, 1540614, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.askMenu_Bottom("#face0#请快点撤退！\r\n#b#L0#我不能独自撤退！#l\r\n#L1#我会先撤退！#l", 37, 1540614);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#后面跟来的人很危险！快点撤退！", 37, 1540614, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom('发射！！嘻嘻嘻！', 37, 1540470, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.cameraSwitch_PushSwitchMoveToPos(200, -109, 2000);
                                                                                        cm.fieldEffect_PlayFieldSound("BlackHeaven/6", 100);
                                                                                        cm.npc_SetSpecialAction("oid=22505954", "shoot", 0, 1);
                                                                                        cm.npc_SetSpecialAction("oid=22505955", 'shoot', 0, 1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1", "oid=22500170"], [0, 100, -160, 1, 0, 1, 0, 0]);
                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                            cm.userSetFieldFloating(350033000, 5, 5, 20);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1", "oid=22500170"], [0, -90, -120, 1, 0, 1, 0, 0]);
                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1", "oid=22500170"], [0, 110, -150, 1, 0, 1, 0, 0]);
                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1", "oid=22500170"], [0, 130, -120, 1, 0, 1, 0, 0]);
                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung2", "oid=22500170"], [0, 0, -100, 1, 0, 1, 0, 0]);
                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion5", 100);
                                                                                                    cm.userSetFieldFloating(350033000, 20, 20, 10);
                                                                                                    cm.npc_SetSpecialAction("oid=22500170", "fall", -1, 1);
                                                                                                    cm.npcMove(1540614, 0, 1200, 7000);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.userSetFieldFloating(350033000, 0, 0, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1", "oid=22500170"], [0, 70, -150, 1, 0, 1, 0, 0]);
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        cm.effect_NormalSpeechBalloon("#fs30##e切奇!!", 0, 0, 0, 1500, 0, 0, 0, 0, 4, 1540616, cm.getPlayer().getId());
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1", "oid=22500171"], [0, 120, -80, 1, 0, 1, 0, 0]);
                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1", "oid=22500171"], [0, -100, -160, 1, 0, 1, 0, 0]);
                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                            cm.setNpcSpecialActionReset("oid=22500170");
                                                                                                            cm.npc_LeaveField("oid=22500170");
                                                                                                            cm.npc_LeaveField("oid=22500170");
                                                                                                            cm.userSetFieldFloating(350033000, 5, 5, 20);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1", "oid=22500171"], [0, 150, -140, 1, 0, 1, 0, 0]);
                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung2", "oid=22500171"], [0, -130, -80, 1, 0, 1, 0, 0]);
                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1", "oid=22500171"], [0, 0, -80, 1, 0, 1, 0, 0]);
                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion5", 100);
                                                                                                                  cm.userSetFieldFloating(350033000, 20, 20, 10);
                                                                                                                  cm.npc_SetSpecialAction("oid=22500171", "fall", -1, 1);
                                                                                                                  cm.npcMove(1540615, 0, 1200, 8000);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.userSetFieldFloating(350033000, 0, 0, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(800);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1", "oid=22500172"], [0, 90, -60, 1, 0, 1, 0, 0]);
                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                                      cm.userSetFieldFloating(350033000, 5, 5, 20);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1", "oid=22500172"], [0, 110, -20, 1, 0, 1, 0, 0]);
                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung2", "oid=22500172"], [0, -100, -160, 1, 0, 1, 0, 0]);
                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1", "oid=22500172"], [0, 120, -60, 1, 0, 1, 0, 0]);
                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1", "oid=22500172"], [0, 0, -60, 1, 0, 1, 0, 0]);
                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion5", 100);
                                                                                                                              cm.userSetFieldFloating(350033000, 20, 20, 10);
                                                                                                                              cm.playSoundEffDirectly("Ambience.img/electronic");
                                                                                                                              cm.npc_SetSpecialAction("oid=22500172", "fall", -1, 1);
                                                                                                                              cm.npcMove(1540616, 0, 900, 8000);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.userSetFieldFloating(350033000, 0, 0, 0);
                                                                                                                                cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                                cm.inGameDirectionEvent_MoveAction(1);
                                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1"], [0, -1200, -570, 1, 0, 1, 1, 0]);
                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung2"], [0, -1150, -360, 1, 0, 1, 1, 0]);
                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1"], [0, -1400, -600, 1, 0, 1, 1, 0]);
                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung2"], [0, -1500, -550, 1, 0, 1, 1, 0]);
                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                                                      cm.userSetFieldFloating(350033000, 20, 20, 10);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1"], [0, -1350, -180, 1, 0, 1, 1, 0]);
                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung2"], [0, -1450, -300, 1, 0, 1, 1, 0]);
                                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion5", 100);
                                                                                                                                            cm.userSetFieldFloating(350033000, 0, 0, 0);
                                                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(0, 200, -900, 300);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                              cm.npc_LeaveField("oid=22505954");
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion5", 100);
                                                                                                                                                  cm.setNpcSpecialActionReset("oid=22500172");
                                                                                                                                                  cm.setNpcSpecialActionReset("oid=22500171");
                                                                                                                                                  cm.npc_LeaveField("oid=22500171");
                                                                                                                                                  cm.npc_LeaveField("oid=22500171");
                                                                                                                                                  cm.npc_LeaveField("oid=22500172");
                                                                                                                                                  cm.npc_LeaveField("oid=22500172");
                                                                                                                                                  cm.npc_LeaveField("oid=22505954");
                                                                                                                                                  cm.npc_LeaveField("oid=22505955");
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                    cm.setAmbience("Ambience.img/flyingdeck", 70, 60);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom('收到请回答，别动队。', 37, 1540452, false, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("你们登上甲板了吗？", 37, 1540452, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("……贝尔？韩利泰？切奇？", 37, 1540452, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("联络……中断了。", 37, 1540459, true, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("怎么会这样……这不可能。", 37, 1540452, false, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face1##fs20#大家在空中盘旋！\r\n所有作战立刻中止，我们要先去营救他们！！", 37, 1540452, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                                    cm.dispose();
                                                                                                                                                                    cm.warp(350033001, 0, true);
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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