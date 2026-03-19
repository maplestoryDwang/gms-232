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
      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
      cm.npc_ChangeController(3004650, "oid=123189072", 420, -456, 1, 370, 470, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=123189072", "summon", 0, 0);
      cm.npc_ChangeController(3004652, "oid=123189073", -60, -264, 6, -110, -10, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=123189073", "summon", 0, 0);
      cm.npc_ChangeController(3004663, "oid=123189074", 526, -434, 2, 476, 576, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=123189074", "summon", 0, 0);
      cm.Npc_Fadeout("oid=123189072", 0, 0);
      cm.Npc_Fadeout("oid=123189073", 0, 0);
      cm.Npc_Fadeout("oid=123189074", 0, 0);
      cm.npc_SetSpecialAction("oid=123189074", 'special3', -1, 1);
      cm.Hidden_background('train', 1, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 260, -351);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 120, -264);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Falldown", 100);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("呃……掉到下面了吗？黑咕隆咚的，好像一脚踩空了……", 56, 0, false, true, 1);
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
                  cm.sendNormalTalk_Bottom("这里是……地下铁路吗？", 56, 0, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/subout4", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("列车？！", 56, 0, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/subout2", 100);
                          cm.userSetFieldFloating(993176001, 3, 3, 10);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", 'oid=1'], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(700);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("该死，通道太窄，没地方躲避！", 56, 0, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/subout3", 100);
                                    cm.Npc_Fadeout("oid=123189072", 255, 0);
                                    cm.Npc_Fadeout("oid=123189074", 255, 0);
                                    cm.Hidden_background('train', 1, 1, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(4500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("啊……啊？！", 56, 0, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.userSetFieldFloating(993176001, 0, 0, 0);
                                        cm.inGameDirectionEvent_MoveAction(4);
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom('……', 56, 0, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#…….", 36, 3004650, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#真是个奇怪的家伙。干嘛趴在天花板上？", 36, 3004650, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("……？", 56, 0, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("天花板？", 56, 0, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayBGM("Bgm54/ReverseCity", 0, 0);
                                                          cm.inGameDirectionEvent_MoveAction(0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.onCameraTilt(-180, 5000);
                                                            cm.inGameDirectionEvent_AskAnswerTime(7000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom('这到底是……', 56, 0, false, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.onCameraTilt(-360, 500);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#哈哈哈，开个玩笑！\r\n这里是反转城，颠倒的世界。", 36, 3004670, false, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("反转城……？", 56, 0, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("（这家伙到底是谁？有种不好的感觉。）", 56, 0, false, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#哎呀，还没来得及自我介绍。", 36, 3004670, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 229, -266);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#我叫#fs18##rT- boy#k#fs16#。\r\n怎么说呢……我是反转城最……", 36, 3004670, false, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0##fs18#普通的人。", 36, 3004670, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("怎么看都不像……", 56, 0, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#好吧，人与人的观点总会存在差异。", 36, 3004670, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                cm.sendNormalTalk_Bottom("#face0#要是自我介绍说是最#fs18##r危险的人#k#fs16#，就没有人敢废话了。", 36, 3004671, false, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_PlayBGM("Bgm54/T-bomb", 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(800);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_SetSpecialAction("oid=123189072", "special6", -1, 1);
                                                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                      cm.gainSkillBuff(70006);
                                                                                                      cm.userSetFieldFloating(993176001, 2, 2, 10);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction24.img/effect/0", "oid=1", '00'], [-1, 0, -30, 1, -10, 1, 0, 0, 1]);
                                                                                                        cm.setAmbience("SoundEff.img/ReverseCity/gravitygun", 200, 60);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("这……这是怎么回事…？！竟然瞬间就中招了？", 56, 0, false, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#你觉得吃惊也不奇怪。你应该从没见过这种东西吧。", 36, 3004670, false, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#这是与超能力或魔法截然不同的……", 36, 3004670, true, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#不，准确地说，应该是#fs18##r难以企及的力量#k#fs16#。", 36, 3004670, true, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.userSetFieldFloating(993176001, 4, 4, 10);
                                                                                                                    cm.sendNormalTalk_Bottom('呃！', 56, 0, true, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#如果能控制自如的话，\r\n这种力量甚至能#r#fs18#扭转整个世界#k#fs16#。", 36, 3004670, true, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#不过很遗憾，暂时遇到了一点点～的问题。", 36, 3004670, true, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.setAmbience("SoundEff.img/ReverseCity/warn2", 200, 60);
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#哔哔哔，装备温度正在上升。警报，警报！", 36, 3004663, true, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.onSetNpcScript("oid=123189072", 1, ["special7", "special8"], [1, -1]);
                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/tboy2", 100);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(800);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction24.img/effect/1", "oid=1", '01'], [-1, 0, -30, 1, -10, 1, 0, 0, 1]);
                                                                                                                              cm.playSoundEffDirectly("SoundEff.img/ReverseCity/gravitygun");
                                                                                                                              cm.setAmbience("SoundEff.img/ReverseCity/gravitygun2", 200, 60);
                                                                                                                              cm.inGameDirectionEvent_隐藏头顶图片('00');
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("呃呃！！", 56, 0, false, true, 1);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#装备温度正在急速上升。建议停止运行。", 36, 3004663, true, true, 1);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#难以控制的力量总是让人心驰神往。", 36, 3004670, false, true, 1);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#但是不要搞错了。\r\n重要的不是这种力量，也不是如何控制。", 36, 3004670, true, true, 1);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("呃……你……", 56, 0, true, true, 1);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#真正重要的是……", 36, 3004670, true, true, 1);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#住手！！", 36, 3004652, false, true, 1);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.Npc_Fadeout("oid=123189073", 255, 500);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#嗯……？", 36, 3004670, false, true, 1);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.npc_SetSpecialAction("oid=123189073", 'special', -1, 1);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#这、这里是我们的地盘！！不许在这里捣乱！", 36, 3004652, false, true, 1);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#……", 36, 3004670, true, true, 1);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#要是我不住手，你又能怎样？", 36, 3004670, true, true, 1);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#艾尔达即将发生猛烈爆炸。\r\n距离爆炸还剩10、9、8……", 36, 3004663, true, true, 1);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#快、快爆炸啦！快停下！！", 36, 3004652, true, true, 1);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#……拜托！", 36, 3004652, true, true, 1);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#是吗？嗯……", 36, 3004670, false, true, 1);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#滴答滴答～", 36, 3004670, true, true, 1);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#过了几秒了？差不多该爆炸了吧？", 36, 3004670, true, true, 1);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.playSoundEffDirectly("SoundEff.img/ReverseCity/warn2");
                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/warn3", 100);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#唔……呃啊啊？！！", 36, 3004652, false, true, 1);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                  cm.npc_SetSpecialAction("oid=123189072", "special5", -1, 1);
                                                                                                                                                                                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                                  cm.inGameDirectionEvent_MoveAction(4);
                                                                                                                                                                                  cm.inGameDirectionEvent_隐藏头顶图片('01');
                                                                                                                                                                                  cm.playSoundEffDirectly("SoundEff.img/ReverseCity/gravitygun2");
                                                                                                                                                                                  cm.dispelBuff(70006);
                                                                                                                                                                                  cm.userSetFieldFloating(993176001, 0, 0, 0);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Falldown", 100);
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#（……）", 36, 3004652, false, true, 1);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#哈哈，哈哈哈，开个玩笑。", 36, 3004670, true, true, 1);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#我好像对贵客太无礼了。", 36, 3004670, true, true, 1);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.setNpcSpecialActionReset("oid=123189073");
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.setNpcSpecialActionReset("oid=123189072");
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#初次见面的问候就到这里吧。", 36, 3004670, false, true, 1);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#对了，蓝色的小家伙。", 36, 3004670, false, true, 1);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#啊！", 36, 3004652, true, true, 1);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#'告诉贝尔，我很期待下一篇。", 36, 3004670, false, true, 1);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/subout4", 100);
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(7000);
                                                                                                                                                                                                            } else if (status === V++) {
                                                                                                                                                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                                              cm.warp(993176002, 0, true);
                                                                                                                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                              cm.setStandAloneMode(false);
                                                                                                                                                                                                              cm.npc_LeaveField("oid=123189072");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=123189073");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=123189074");
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