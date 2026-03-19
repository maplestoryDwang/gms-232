var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (!cm.isQuestFinished(35700)) {
    action1(f, E, e);
  } else {
    cm.dispose();
    cm.npc_ChangeController(3003701, 'oid=276968', 76, 419, 6, 26, 126, 0, false, 0, false);
    cm.npc_ChangeController(3003702, 'oid=276969', -5, 419, 6, -55, 45, 0, false, 0, false);
    cm.npc_ChangeController(3003703, "oid=276970", 1289, 447, 2, 1239, 1322, 1, false, 0, false);
    cm.Hidden_background("63000_fish", 1, 0, 0, 0);
    cm.fieldEffect_PlayBGM("Bgm49/WaveofEmptiness", 0, 0);
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(3003701, "oid=276968", 76, 419, 6, 26, 126, 0, false, 0, false);
      cm.npc_ChangeController(3003702, "oid=276969", -5, 419, 6, -55, 45, 0, false, 0, false);
      cm.npc_ChangeController(3003703, 'oid=276970', 1289, 447, 2, 1239, 1322, 1, false, 0, false);
      cm.teachSkill(80001037, -1, 0);
      cm.Hidden_background("63000_fish", 1, 0, 0, 0);
      cm.updateInfoQuest(35750, "01=h1");
      cm.updateInfoQuest(35750, "01=h1;02=h1");
      cm.updateInfoQuest(35750, "01=h1;02=h1;03=h0");
      cm.forceStartQuest(35700, '');
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 1451, -450);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3003756, "oid=2304857", 1448, -554, 16, 1398, 1498, 1, false, 0, false);
          cm.npc_SetSpecialAction("oid=2304857", 'summon', 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
          cm.setAmbience("Ambience.img/blizzard_soft", 200, 60);
          cm.effect_Text(["#fn黑体##fs18#月桥，天空中的某处"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3300);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('#face2#呃……', 37, 3003756, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#这是怎么回事？", 37, 3003756, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#我还记得爆炸前的事情……这里是怎么……", 37, 3003756, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#不过这鱼腥味是……嗯？", 37, 3003756, true, true);
                    } else {
                      if (status === V++) {
                        cm.Hidden_background("63000_fish", 1, 1, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2304857"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#我……我……", 37, 3003756, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1##fs20#飞鱼？！！", 37, 3003756, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom('#face0#噗……', 37, 3003409, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 700, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_LeaveField("oid=2304857");
                                        cm.playSoundEffDirectly("Ambience.img/blizzard_soft");
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 308, 433);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_ChangeController(3003752, "oid=2304865", 440, 430, 3, 390, 490, 1, false, 0, false);
                                          cm.npc_SetSpecialAction("oid=2304865", "summon", 0, 0);
                                          cm.npc_ChangeController(3003753, "oid=2304866", 520, 430, 1, 470, 570, 1, false, 0, false);
                                          cm.npc_SetSpecialAction("oid=2304866", "summon", 0, 0);
                                          cm.npc_ChangeController(3003754, "oid=2304867", 600, 430, 1, 550, 650, 1, false, 0, false);
                                          cm.npc_SetSpecialAction("oid=2304867", "summon", 0, 0);
                                          cm.npc_ChangeController(3003756, "oid=2304868", 250, 435, 3, 200, 300, 0, false, 0, false);
                                          cm.npc_SetSpecialAction("oid=2304868", 'summon', 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#……就是这样。", 37, 3003756, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("原来是飞鱼帮助了你啊！", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#那位……不，那个飞鱼只留下句#b到时候还会回来#k就马上离开了。", 37, 3003756, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#它说话了？天上飞的飞鱼？", 37, 3003752, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("哈哈……", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face4#你没事就好，沃莉。", 37, 3003750, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#但是……沃莉，你真的没事吗？\r\n我听说你接触到了碎片中的意念啊。", 37, 3003752, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#从检查结果来看没什么后遗症。但是……\r\n在接触到意念的一瞬间，沃莉似乎看到了#r什么重要的东西#k。", 37, 3003751, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#重要的东西？", 37, 3003754, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face3#关于#fs18##r黑魔法师的过去#k。", 37, 3003756, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2304865"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2304866"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2304867"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#沃莉，你能跟大家说明一下吗？", 37, 3003750, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom('#face3#好的。', 37, 3003756, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face3#我看到了。", 37, 3003756, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face3#那应该是……黑魔法师还算是人的时候……", 37, 3003756, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face3#在他刚刚超越认识的局限，\r\n刚刚进入#fs18##r神的空间#k#fs16#的时候。", 37, 3003756, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_PlayBGM("Bgm49/WaveofEmptiness", 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction20.img/effect/BM2_wm/0", 0, 1500, 0, -80, 0, 4, 1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2300);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("白魔法师……", 57, 0, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#看到了……", 0);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#我终于……到了……", 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#到现在我们终于能前进了…… ", 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#跳出了不合理的世界，", 0);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#神之城市……！", 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face3#他的心中充满了难以形容的喜悦。", 37, 3003756, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face3#远大的理想近在眼前。", 37, 3003756, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face3#但是，感动也只是暂时的。\r\n他发现了束缚自己的某个东西。", 37, 3003756, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction20.img/effect/BM2_wm/1", 0, 350, 0, -80, 0, 4, 1);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 350, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#这是……？！", 0);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#你是……！！！", 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.fieldEffect_PlayBGM("Bgm49/WarCloud", 0, 0);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#那究竟是什么？他看到了什么？", 37, 3003752, false, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face3##fs18##r世界的原型，不，更进一步的东西……#k", 37, 3003756, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#这是什么意思？", 37, 3003754, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face3##fs18##r平衡，法则，道理……#k 我也不知道。\r\n那很难用语言来描述。", 37, 3003756, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#虽然那就像是迷雾一样，是没有实体的#r概念和抽象#k……\r\n但是却又分明存在着，可以切实地感受到它。", 37, 3003756, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#嗯……", 37, 3003751, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#请继续，沃莉。", 37, 3003750, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face3#它缠绕着黑魔法师。\r\n比任何金属都要更冰冷和凝重……就像是#r坚固的锁链#k一样。", 37, 3003756, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#锁链……", 37, 3003750, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face3#他大叫了起来。", 37, 3003756, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#你……居然拒绝变化？", 0);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#你想要什么？", 1);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#难道世界就要这么继续不完整下去吗？", 0);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#究竟……究竟……要怎么……？", 1);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#我无法承认……这……", 1);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_Monologue("#fn黑体##r#fs26#我不这么认为！", 1);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face3#他是这么说的。", 37, 3003756, false, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_Monologue("#r#fn黑体##fs22#就算你绑住我也没用。", 0);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.inGameDirectionEvent_Monologue("#r#fn黑体##fs22#我会开辟新的道路。", 1);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.inGameDirectionEvent_Monologue("#r#fn黑体##fs22#我会用超越更好的决心，", 0);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.inGameDirectionEvent_Monologue("#r#fn黑体##fs22#变化的意志来切断束缚我的锁链。", 1);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.inGameDirectionEvent_Monologue("#r#fn黑体##fs22#如果需要封印我自己，那我就去封印自己。", 0);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.inGameDirectionEvent_Monologue("#r#fn黑体##fs22#如果需要毁灭这个世界，我就去毁灭世界。", 1);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_Monologue("#fs20#我……我……", 1);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.fieldEffect_PlayBGM("Bgm26/DarkMage", 0, 0);
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.fieldEffect_ProcessOnOffLayer('98', "Effect/Direction14.img/effect/WWdark", 0, 700, 0, 0, 12, 4, 0);
                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.fieldEffect_ProcessOnOffLayer('99', "Effect/Direction14.img/effect/WWdarkeye", 0, 700, 0, 0, 12, 4, 0);
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.effect_Text(["#r#fn黑体##fs26#会……成为黑暗。"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#竟然……", 37, 3003752, false, true);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#他不只是想要破坏世界的疯子啊？", 37, 3003752, true, true);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#这究竟是怎么…… ", 37, 3003754, true, true);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#……", 37, 3003750, true, true);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#请不要动摇，什么都没有变。", 37, 3003750, true, true);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#我们只是为了生存而战。", 37, 3003750, true, true);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#女皇说的没错。\r\n不管他的理想是什么，我们无需动摇。", 37, 3003751, true, true);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#嗯……我也是这么想的。", 37, 3003754, true, true);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('98', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('99', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                  cm.fieldEffect_Hero9(0, 3000);
                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#我看到的就这些。\r\n那之后只有一句话在我脑海中回荡。", 37, 3003756, false, true);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face3#说要创造#fs18##r创世之路#k#fs16#……的那句话。", 37, 3003756, true, true);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#创世之路……", 37, 3003752, true, true);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#报告！现在整个舰队正在接近黑太阳。", 37, 3003758, true, true);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#看来先就说到这里吧。", 37, 3003751, true, true);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#请各位舰长进入警戒状态。", 37, 3003750, true, true);
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#沃莉也休息下吧。", 37, 3003750, true, true);
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#是，女皇。", 37, 3003756, true, true);
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                          cm.Npc_Fadeout("oid=2304865", 0, 300);
                                                                                                                                                                                                                                          cm.Npc_Fadeout("oid=2304866", 0, 300);
                                                                                                                                                                                                                                          cm.Npc_Fadeout("oid=2304867", 0, 300);
                                                                                                                                                                                                                                          cm.Npc_Fadeout("oid=2304868", 0, 300);
                                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=2304865");
                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=2304865");
                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=2304866");
                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=2304866");
                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=2304867");
                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=2304867");
                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=2304868");
                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=2304868");
                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                          } else if (status === V++) {
                                                                                                                                                                                                                                            cm.fieldEffect_Hero9(80, 10);
                                                                                                                                                                                                                                            cm.forceCompleteQuest(35700);
                                                                                                                                                                                                                                            cm.gainExp(170671356);
                                                                                                                                                                                                                                            cm.updateInfoQuest(35700, 'dir=end');
                                                                                                                                                                                                                                            cm.Hidden_background("63000_fish", 1, 0, 0, 0);
                                                                                                                                                                                                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                                                                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                                                                                                            cm.fieldEffect_PlayBGM("Bgm49/WaveofEmptiness", 0, 0);
                                                                                                                                                                                                                                            cm.playerMessage(1, 'dd');
                                                                                                                                                                                                                                            cm.setStandAloneMode(false);
                                                                                                                                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                            cm.dispose();
                                                                                                                                                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                              }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                }
                                                                                                                                                                                                              }
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }
                                                                                                                                                                                                        }
                                                                                                                                                                                                      }
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}