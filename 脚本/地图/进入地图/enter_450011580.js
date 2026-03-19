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
      cm.teachSkill(80001037, -1, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h2;03=h1;22=h2;04=h0;23=h2;14=h0;05=h5;06=h1;15=h1;07=h0;17=h0;09=h0;79=h1");
        cm.npc_ChangeController(3003770, "oid=2311057", -1100, 180, 20, -1150, -1050, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2311057", "summon", 0, 0);
        cm.npc_SetForceMove("oid=2311057", 1, 500, 150);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
          cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1500, 4000, -638, 155);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(5000);
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=2311057", -1);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.fieldEffect_Hero9(50, 1000);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1##h0#。", 37, 3003770, false, true);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=2311057", "reveal", 1200, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_ChangeEquipment([1012506]);
                      cm.npc_SetSpecialAction("oid=2311057", "reveal1", -1, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/1_1", 128);
                        cm.sendNormalTalk_Bottom("#face1#这边……", 37, 3003770, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/1"], [4000, -693, 170, 1, 0, 1, 1, 0]);
                          cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/2_1", 128);
                            cm.sendNormalTalk_Bottom("#face1#再深一点……", 37, 3003770, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/2"], [1200, -693, 170, 1, 0, 1, 1, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(100);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/beforemagic", 200);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/3"], [5000, -693, 170, 1, 0, 1, 1, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/magicstart", 200);
                                    cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/3_1", 128);
                                    cm.sendNormalTalk_Bottom("#face0#就是现……在！！！", 37, 3003770, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_ChangeController(3003518, "oid=2311074", -1100, 180, 20, -1150, -1050, 0, false, 0, false);
                                      cm.npc_SetSpecialAction("oid=2311074", 'summon', 0, 0);
                                      cm.npcMove(3003518, 0, -130, 0);
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/portal_attack", 200);
                                      cm.npc_SetSpecialAction("oid=2311074", 'special', 1, 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                        cm.inGameDirectionEvent_ChangeEquipment([0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_LeaveField("oid=2311074");
                                            cm.npc_LeaveField("oid=2311074");
                                            cm.npc_LeaveField("oid=2311057");
                                            cm.npc_LeaveField("oid=2311057");
                                            cm.npc_ChangeController(3003771, "oid=2311075", -390, 180, 12, -440, -340, 1, true, 0, false);
                                            cm.npc_SetSpecialAction("oid=2311075", 'summon', 0, 0);
                                            cm.npc_SetSpecialAction("oid=2311075", "stand", -1, 1);
                                            cm.npc_ChangeController(3003772, "oid=2311076", -943, -45, 2, -993, -893, 0, true, 0, false);
                                            cm.npc_SetSpecialAction("oid=2311076", "summon", 0, 0);
                                            cm.npc_SetSpecialAction("oid=2311076", 'stand', -1, 1);
                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -600, 90);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('呃……', 57, 0, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/4_1", 128);
                                                    cm.sendNormalTalk_Bottom("#face5#哈……真是的……", 37, 3003770, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/5_2", 128);
                                                      cm.sendNormalTalk_Bottom("#face5#再多走一步就好了！", 37, 3003770, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/hillahappear", 200);
                                                          cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM2_hillahAppear_spine/hillah", "animation", '', '0'], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(13000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_取消复合图片动画('0', 100, 0);
                                                            cm.fieldEffect_PlayBGM("Bgm49/DepthOfPain", 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/6_2", 128);
                                                                cm.sendNormalTalk_Bottom("#face3#竟然妨碍我们的二人世界，真没礼貌！", 37, 3003771, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("希……拉……？", 57, 0, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom('你怎么来这里了……？', 57, 0, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/7_1", 128);
                                                                        cm.sendNormalTalk_Bottom("#face3#还想妨碍蜘蛛王，", 37, 3003771, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/8_2", 128);
                                                                          cm.sendNormalTalk_Bottom("#face3#现在连我都不放过了吗。", 37, 3003771, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#……", 37, 3003772, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/9_2", 128);
                                                                              cm.sendNormalTalk_Bottom("#face3#真是的……\r\n我本打算把使用他痕迹的对抗者献给他\r\n你竟敢妨碍我……", 37, 3003771, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/11_2", 128);
                                                                                  cm.sendNormalTalk_Bottom("#face0#不，这难道是件好事？又多了一条能杀的人命。", 37, 3003771, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("你不是在冒险岛世界消失了吗……怎么会……？", 57, 0, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/12_2", 128);
                                                                                      cm.sendNormalTalk_Bottom("#face0#你问我是怎么到这里来的？这不是很正常的吗？\r\n我如果不在伟大之人身边，我还能在哪儿？", 37, 3003771, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("啊……阿扎琳呢？你到底干了什么……", 57, 0, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H_effect/2_3", 128);
                                                                                          cm.sendNormalTalk_Bottom("#face0#哈哈哈哈哈哈哈哈哈！", 37, 3003771, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/13_1", 128);
                                                                                            cm.sendNormalTalk_Bottom("#face0#帮帮我！救救我！", 37, 3003771, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/14_2", 128);
                                                                                                cm.sendNormalTalk_Bottom("#face0#就这么挫了挫你的锐气\r\n弄得你连智商都降低了吗。对抗者。", 37, 3003771, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("你到底在谋划些什么！！！", 57, 0, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("借……借用我的手做那种事……", 57, 0, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("为什么让我……", 57, 0, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/15_3", 128);
                                                                                                        cm.sendNormalTalk_Bottom("#face0#人类真愚蠢。", 37, 3003771, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/16_1", 128);
                                                                                                          cm.sendNormalTalk_Bottom("#face0#得不到的总是最好的。\r\n但却不会为此而努力。", 37, 3003771, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/17_2", 128);
                                                                                                            cm.sendNormalTalk_Bottom("#face0#只是一味盼望着有人能来找自己\r\n有人能够救他们。", 37, 3003771, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("这是什么……", 57, 0, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/18_2", 128);
                                                                                                                cm.sendNormalTalk_Bottom("#face0#我……会在冒险岛世界消失吗？", 37, 3003771, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("你在……做……什……么……", 57, 0, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/19_3", 128);
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#嘿嘿。这个嘛？", 37, 3003771, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/20_1", 128);
                                                                                                                        cm.sendNormalTalk_Bottom("#face0##r陷入更深的泥潭，永远被困在其中，#k", 37, 3003771, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/21_1", 128);
                                                                                                                            cm.sendNormalTalk_Bottom("#face0##r这就是你命运的尽头。对抗者。#k", 37, 3003771, false, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/22_1", 128);
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#还是快点接受自己的命运吧。", 37, 3003771, false, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/23_2", 128);
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#你再继续挣扎下去，只会让自己更累不是吗？", 37, 3003771, false, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/24_1", 128);
                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#还有你。", 37, 3003771, false, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/25_2", 128);
                                                                                                                                          cm.sendNormalTalk_Bottom("#face2#嗯……你想用某种东西遮盖你的气息，隐藏自己的真实身份……", 37, 3003771, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/26_2", 128);
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#适可而止吧。下次我可要好好品尝一下你的灵魂。", 37, 3003771, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/27_2", 128);
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#好了，我们下次再见。#h0#！", 37, 3003771, false, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.updateInfoQuest(35722, "altar=off");
                                                                                                                                                    cm.npc_SetSpecialAction("oid=2311075", "disappear", 900, 1);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.npc_LeaveField("oid=2311075");
                                                                                                                                                      cm.npc_LeaveField("oid=2311075");
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H1/28_2", 128);
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#到时候你的灵魂有多成熟\r\n我可是很期待呢？", 37, 3003771, false, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/H_effect/2_3", 128);
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#哈哈哈哈哈哈哈哈哈", 37, 3003771, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                                                cm.fieldEffect_PlayBGM("Bgm49/EternalSwamp", 0, 0);
                                                                                                                                                                cm.fieldEffect_Hero9(80, 1000);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h2;03=h1;22=h2;04=h0;23=h2;14=h0;05=h5;06=h1;15=h1;07=h1;17=h0;09=h0;79=h1");
                                                                                                                                                                  cm.npc_LeaveField("oid=2311076");
                                                                                                                                                                  cm.npc_LeaveField("oid=2311076");
                                                                                                                                                                  cm.updateInfoQuest(35722, "altar=off;dir=end");
                                                                                                                                                                  cm.forceCompleteQuest(35722);
                                                                                                                                                                  cm.gainExp(170671356);
                                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1400);
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
                                                                                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.setStandAloneMode(false);
                                                                                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                              cm.curNodeEventEnd(true);
                                                                                                                                                                              cm.setInGameDirectionMode(true, false, true);
                                                                                                                                                                              cm.setStandAloneMode(true);
                                                                                                                                                                              cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                                                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -845, 155);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.npc_ChangeController(3003772, "oid=2311463", -943, -45, 2, -993, -893, 0, true, 0, false);
                                                                                                                                                                                cm.npc_SetSpecialAction("oid=2311463", "summon", 0, 0);
                                                                                                                                                                                cm.npc_SetSpecialAction("oid=2311463", 'stand', -1, 1);
                                                                                                                                                                                cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h2;03=h1;22=h2;04=h0;23=h2;14=h0;05=h5;06=h1;15=h1;07=h0;17=h0;09=h0;79=h1");
                                                                                                                                                                                cm.onTeleport(0, 3, cm.getPlayer().getId(), -800, 164);
                                                                                                                                                                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("你是……谁……？", 57, 0, false, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("在埃斯佩拉……还有这里……", 57, 0, true, true);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("你在干什么？", 57, 0, true, true);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#……", 37, 3003772, true, true);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#我到底要救你几次？", 37, 3003772, true, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("你说……什么？你到底……", 57, 0, true, true);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#打起精神来。早知道你是这副懦弱的样子，我绝不会……", 37, 3003772, true, true);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#……", 37, 3003772, true, true);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#放弃吧。你要是继续妨碍我，就立刻从这里消失。", 37, 3003772, true, true);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#不会再有第二次了。", 37, 3003772, true, true);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.Npc_Fadeout("oid=2311463", 0, 1000);
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.npc_LeaveField("oid=2311463");
                                                                                                                                                                                                          cm.npc_LeaveField("oid=2311463");
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("等……等一下！", 57, 0, false, true);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.inGameDirectionEvent_同时移动镜头和人(1, 200);
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/voiceBregen", 100);
                                                                                                                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/22"], [0, -1200, 140, 1, 0, 1, 1, 0]);
                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2800);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                                                                                                                    cm.setAmbience("SoundEff.img/BM2/voiceBstand", 80, 100);
                                                                                                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/21"], [10000, -1200, 140, 1, 0, 1, 1, 0]);
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2800);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom('咳……', 57, 0, false, true);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#……要一起……", 37, 3003767, true, true);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("我脑海里……脑海里有声音！！！", 57, 0, true, true);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#……走……", 37, 3003767, true, true);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("别……别管我！", 57, 0, true, true);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                                                                                                                                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                          cm.setStandAloneMode(false);
                                                                                                                                                                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                          cm.askAcceptDecline_Bottom("为了躲开声音……我必须逃离这里！", 57, 3003707);
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                            cm.playerMessage(5, "在区域内减少一定数量的怪物才能前往下一关卡。");
                                                                                                                                                                                                                                            var O = cm.getEventManager("痛苦迷宫_战斗6");
                                                                                                                                                                                                                                            O.startInstance(cm.getPlayer(), cm.getMap());
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
        }
      }
    }
  }
}