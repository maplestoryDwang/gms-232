var status = -1;
var selectionLog = [];
function action(N, R, c) {
  if (status == 0 && N == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = c;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.forceStartQuest(33900, '4');
      cm.mapleHeroBecomeNpc(7, 0);
      cm.getPlayer().makeDragon(2217);
      cm.onActionBarResult(6, -1);
      cm.onActionBarResult(5, 30);
      cm.setPartner(1, 1540780, 80001899, 0);
      cm.setPartner(1, 1540782, 80001901, 0);
      cm.setPartner(1, 1540783, 80001902, 0);
      cm.mapleHeroSetList([4, 0, 2, 3]);
      cm.updateInfoQuest(33965, "meso=16917;p0=1;p1=1;p2=1;p3=1;p=0;sand=1;exp=102");
      cm.onSetMapObjectCreateLayerMore("sand_top", 2, "01_animation_S_stand", 1);
      cm.onSetMapTagedObjectVisible(1, "door", 512);
      cm.Hidden_background("falling", 1, 0, 0, 0);
      cm.Hidden_background("sand_bottom", 1, 0, 0, 0);
      cm.Hidden_background('0', 1, 0, 0, 0);
      cm.Hidden_background('1', 1, 0, 0, 0);
      cm.Hidden_background('2', 1, 0, 0, 0);
      cm.Hidden_background('3', 1, 0, 0, 0);
      cm.Hidden_background('4', 1, 0, 0, 0);
      cm.Hidden_background('5', 1, 0, 0, 0);
      cm.Hidden_background('6', 1, 0, 0, 0);
      cm.Hidden_background('7', 1, 0, 0, 0);
      cm.Hidden_background('8', 1, 0, 0, 0);
      cm.Hidden_background('9', 1, 0, 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setAmbience("Ambience.img/gravity", 100, 60);
      cm.inGameDirectionEvent_AskAnswerTime(600);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 4);
        cm.forceCompleteQuest(33974);
        cm.gainExp(Math.pow(cm.getLevel(), 3) * 4);
        cm.updateInfoQuest(33962, "33971=1;33972=1;33973=1;33974=1");
        cm.inGameDirectionEvent_AskAnswerTime(3000);
        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(2);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(0);
              cm.sendNormalTalk_Bottom("这里好像没有怪物。", 37, 1540804, false, true);
              cm.effect_Voice("Voice3.img/HofM/ACT2/CRISIS/1", 128);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face5#不要掉以轻心，换做是我就会在这种地方挖陷阱。", 37, 1540803, true, true);
                cm.effect_Voice("Voice3.img/HofM/ACT2/CRISIS/2", 128);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('你为什么会这么想？', 37, 1540804, true, true);
                  cm.effect_Voice("Voice3.img/HofM/ACT2/CRISIS/3", 128);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face6#因为现在正是会掉以轻心的大好时机，就像木头你这样。", 37, 1540803, true, true);
                    cm.effect_Voice("Voice3.img/HofM/ACT2/CRISIS/4", 128);
                  } else {
                    if (status === V++) {
                      cm.onSetMapTagedObjectVisible(1, 'door', 0);
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/KoongDoor", 100);
                      cm.userSetFieldFloating(350122700, 5, 5, 5);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.userSetFieldFloating(350122700, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_ForcedFlip(-1);
                          cm.playSoundEffDirectly("Ambience.img/gravity");
                          cm.fieldEffect_PlayBGM("Bgm45/Time Is Gold", 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face5#看吧，我怎么说来着。", 37, 1540803, false, true);
                            cm.effect_Voice("Voice3.img/HofM/ACT2/CRISIS/5", 128);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#幻影你，还真是乌鸦嘴！", 37, 1540801, true, true);
                              cm.effect_Voice("Voice3.img/HofM/ACT2/CRISIS/6", 128);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_ForcedFlip(1);
                                cm.inGameDirectionEvent_MoveAction(2);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_MoveAction(0);
                                  cm.sendNormalTalk_Bottom("主人！看看那上面！", 37, 1540807, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNewEffects(2, [0, 0, 0, 0, 0]);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNewEffects(17, [1000, 1000, 1000, 146, -2140]);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.onSetMapObjectCreateLayerMore('sand_top', 2, "02_animation_A_summon", 0);
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/SandTrap", 100);
                                          cm.onSetMapObjectCreateLayerMore("sand_top", 3, "03_animation_B_loop", 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.userSetFieldFloating(350122700, 5, 5, 5);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.userSetFieldFloating(350122700, 0, 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1533);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(467);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#哇，有沙子掉下来了啊？", 37, 1540805, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("那不是一般的沙子，主人！是混合了金币和金粉的沙子。", 37, 1540807, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face6#重要的不是这点吧！", 37, 1540805, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNewEffects(2, [0, 0, 0, 0, 0]);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNewEffects(17, [1000, 1000, 1000, 146, -1840]);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face4#那边！出口在那边！", 37, 1540801, false, true);
                                                              cm.effect_Voice("Field.img/flowervioleta/wink", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.Hidden_background("falling", 1, 1, 0, 0);
                                                                cm.Hidden_background("sand_bottom", 1, 1, 0, 0);
                                                                cm.sendNewEffects(17, [300, 1000, 1000, 146, 1700]);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.forceStartQuest(33900, '4');
                                                                  cm.mapleHeroBecomeNpc(7, 0);
                                                                  cm.onActionBarResult(6, -1);
                                                                  cm.onActionBarResult(5, 30);
                                                                  cm.setPartner(0, 1540782, 0, 0);
                                                                  cm.setPartner(0, 1540783, 0, 0);
                                                                  cm.setPartner(0, 1540780, 0, 0);
                                                                  cm.mapleHeroSetList([4]);
                                                                  cm.onTeleport(0, 3, cm.getPlayer().getId(), 146, -358);
                                                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                  cm.npc_ChangeController(1540801, "oid=288393258", 170, -380, 5, 120, 220, 0, true, 0, false);
                                                                  cm.npc_SetSpecialAction("oid=288393258", "summon", 0, 0);
                                                                  cm.npc_setForceFlip("oid=288393258", 1);
                                                                  cm.npc_ChangeController(1540803, "oid=288393259", 60, -380, 4, 10, 110, 0, true, 0, false);
                                                                  cm.npc_SetSpecialAction("oid=288393259", 'summon', 0, 0);
                                                                  cm.npc_setForceFlip("oid=288393259", 1);
                                                                  cm.npc_ChangeController(1540804, "oid=288393260", 420, -380, 6, 370, 470, 0, true, 0, false);
                                                                  cm.npc_SetSpecialAction("oid=288393260", "summon", 0, 0);
                                                                  cm.npc_setForceFlip("oid=288393260", -1);
                                                                  cm.onSetMapObjectCreateLayerMore("sand_bottom", 2, '02_move', 0);
                                                                  cm.onSetMapObjectCreateLayerMore("sand_bottom", 3, "01_stand", 1);
                                                                  cm.sendNormalTalk_Bottom("#face2#看看那下面！沙子正在堆上来！", 37, 1540805, false, true, 1, 2000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("主人，我们会死在这里吗？！！！", 37, 1540807, true, true, 1, 2000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNewEffects(17, [100, 1000, 1000, 146, -350]);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_Hero8(1);
                                                                          cm.fieldEffect_Hero9(40, 1000);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face4#看来古代之神实现了我的愿望，\r\n我小时候的梦想就是被埋葬在宝物里。", 37, 1540803, false, true);
                                                                            cm.effect_Voice("Voice3.img/HofM/ACT2/CRISIS/11", 128);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face4#现在可没有闲功夫开玩笑！继续这样下去，会被封死的。", 37, 1540801, true, true);
                                                                              cm.effect_Voice("Voice3.img/HofM/ACT2/CRISIS/12", 128);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face4#别担心，天无绝人之路，是吧，龙神？", 37, 1540803, true, true);
                                                                                cm.effect_Voice("Voice3.img/HofM/ACT2/CRISIS/13", 128);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNewEffects(17, [1000, 1000, 1200, 146, -350]);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face8#什么？我吗？", 37, 1540805, false, true);
                                                                                      cm.effect_Voice("Voice3.img/HofM/ACT2/CRISIS/14", 128);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face4#我们是听你的话才聚到了这里，你肯定能找到摆脱这一危机的线索的吧。", 37, 1540803, true, true);
                                                                                        cm.effect_Voice("Voice3.img/HofM/ACT2/CRISIS/15", 128);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face2#看来你喜欢赌博的脾性还是老样子啊，这种状况之下，他一个毛孩子能做什么。", 37, 1540804, true, true);
                                                                                          cm.effect_Voice("Voice3.img/HofM/ACT2/CRISIS/16", 128);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face4#到底是毛孩子还是英雄，总得开牌之后才能知晓吧？", 37, 1540803, true, true);
                                                                                            cm.effect_Voice("Voice3.img/HofM/ACT2/CRISIS/17", 128);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face4#龙神，集中注意力，有什么能想起来的吗？", 37, 1540801, true, true);
                                                                                              cm.effect_Voice("Voice3.img/HofM/ACT2/CRISIS/18", 128);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face4#等一下！我想一想……！", 37, 1540805, true, true);
                                                                                                cm.effect_Voice("Voice3.img/HofM/ACT2/CRISIS/19", 128);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_Hero9(20, 1000);
                                                                                                  cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#早上长，中午短，晚上又变长的是？", 37, 1540844, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face4#影子……没错，正确答案是影子！", 37, 1540805, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_Hero9(100, 1000);
                                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face3#夜光法师，我们需要你的光！\r\n请用宝珠之光造出石像的影子！", 37, 1540805, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face4#果然，原来如此。", 37, 1540804, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNewEffects(17, [2000, 1200, 1000, 146, -500]);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.npc_LeaveField("oid=288393260");
                                                                                                                  cm.npc_LeaveField("oid=288393260");
                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, 420, -380, 1, 0, 1, 1, 0]);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.onSetMapObjectCreateLayerMore('shadow', 2, "an_1", 0);
                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/ShadowTrap", 100);
                                                                                                                    cm.onSetMapObjectCreateLayerMore("shadow", 3, "an_2", 1);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4880);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face3#好像成功了！", 37, 1540805, false, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face3#还不行，还需要一道光！", 37, 1540801, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face4#偷光而已嘛，小菜一碟。", 37, 1540803, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_LeaveField("oid=288393259");
                                                                                                                              cm.npc_LeaveField("oid=288393259");
                                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, 60, -380, 1, 0, 1, 1, 0]);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.onSetMapObjectCreateLayerMore("shadow", 2, 'an_3', 0);
                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/ShadowTrap2", 100);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3890);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.userSetFieldFloating(350122700, 5, 5, 5);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.userSetFieldFloating(350122700, 0, 0, 0);
                                                                                                                                    cm.onSetMapObjectCreateLayerMore("shadow", 3, 'an_4', 1);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/FootHold2", 100);
                                                                                                                                      cm.Hidden_background('0', 1, 1, 0, 0);
                                                                                                                                      cm.onSetMapTagedObjectVisible(1, '0', 512);
                                                                                                                                      cm.onSetMapTagedObjectVisible(1, '0', 0);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.Hidden_background('1', 1, 1, 0, 0);
                                                                                                                                        cm.onSetMapTagedObjectVisible(1, '1', 512);
                                                                                                                                        cm.onSetMapTagedObjectVisible(1, '1', 0);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.Hidden_background('2', 1, 1, 0, 0);
                                                                                                                                          cm.onSetMapTagedObjectVisible(1, '2', 512);
                                                                                                                                          cm.onSetMapTagedObjectVisible(1, '2', 0);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.Hidden_background('3', 1, 1, 0, 0);
                                                                                                                                            cm.onSetMapTagedObjectVisible(1, '3', 512);
                                                                                                                                            cm.onSetMapTagedObjectVisible(1, '3', 0);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.Hidden_background('4', 1, 1, 0, 0);
                                                                                                                                              cm.onSetMapTagedObjectVisible(1, '4', 512);
                                                                                                                                              cm.onSetMapTagedObjectVisible(1, '4', 0);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/FootHold", 100);
                                                                                                                                                cm.Hidden_background('5', 1, 1, 0, 0);
                                                                                                                                                cm.onSetMapTagedObjectVisible(1, '5', 512);
                                                                                                                                                cm.onSetMapTagedObjectVisible(1, '5', 0);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.Hidden_background('6', 1, 1, 0, 0);
                                                                                                                                                  cm.onSetMapTagedObjectVisible(1, '6', 512);
                                                                                                                                                  cm.onSetMapTagedObjectVisible(1, '6', 0);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.Hidden_background('7', 1, 1, 0, 0);
                                                                                                                                                    cm.onSetMapTagedObjectVisible(1, '7', 512);
                                                                                                                                                    cm.onSetMapTagedObjectVisible(1, '7', 0);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.Hidden_background('8', 1, 1, 0, 0);
                                                                                                                                                      cm.onSetMapTagedObjectVisible(1, '8', 512);
                                                                                                                                                      cm.onSetMapTagedObjectVisible(1, '8', 0);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.Hidden_background('9', 1, 1, 0, 0);
                                                                                                                                                        cm.onSetMapTagedObjectVisible(1, '9', 512);
                                                                                                                                                        cm.onSetMapTagedObjectVisible(1, '9', 0);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/FootHold2", 100);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("主人，出现了踏板！", 37, 1540807, false, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face2#小毛贼，那是我的技能！", 37, 1540804, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom(" #face4#现在重要的可不是谁的技能吧！", 37, 1540801, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNewEffects(17, [300, 1000, 1000, 146, 1700]);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.onSetMapObjectCreateLayerMore("sand_bottom", 2, "02_move", 0);
                                                                                                                                                                    cm.onSetMapObjectCreateLayerMore("sand_bottom", 3, "01_stand", 1);
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#额啊，沙子快要漫过来了。", 37, 1540805, false, true, 1, 2000);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face2#被沙子吞噬就完蛋了！", 37, 1540804, true, true, 1, 2000);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNewEffects(17, [300, 1000, 1000, 146, -500]);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom(" #face4#大家伙，都跟我来！", 37, 1540801, false, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                            cm.sendNewEffects(19, [0]);
                                                                                                                                                                          } else if (status === V++) {
                                                                                                                                                                            cm.dispose();
                                                                                                                                                                            cm.warp(350122800, 0, true);
                                                                                                                                                                            cm.npc_LeaveField("oid=288393258");
                                                                                                                                                                            cm.npc_LeaveField("oid=288393258");
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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