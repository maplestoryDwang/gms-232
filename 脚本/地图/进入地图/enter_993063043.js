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
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -852, -3652);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.setAmbience("Ambience.img/verdel_wind1", 80, 100);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.sendNormalTalk_Bottom("嗯？这个是……", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0##h0#，南哈特找你。", 37, 3003758, true, true);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
              cm.sendNormalTalk_Bottom("#face2#吱吱……吱吱……敌人的动态……无法感知……吱吱……黑暗……", 37, 3003751, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("这边也是一样的情况，在黑暗中什么也看不到。", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("希望大家在发生例外情况时立刻进行通知。", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                    cm.sendNormalTalk_Bottom("#face2#通讯……有点……", 37, 3003751, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("南哈特！南哈特！", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('通讯中断了……', 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("请重新连接通讯！", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("还有，请大家不要放松警惕。", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.forceStartQuest(35754, '');
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM2_MnM_spine/MnM", 'A', '', 'A'], [0, 1, 1, 999999, 0, 0, 0, 1]);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("有些奇怪……除了一片黑暗，没有任何的抵抗。", 56, 0, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("他应该不可能就这么放我们进来啊……", 56, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#应该有很多理由吧。", 37, 3003755, true, true);
                                              cm.effect_Voice("Voice4.img/BM2/M1/1-1", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#可能是没有力量来阻止我们……", 37, 3003755, true, true);
                                                cm.effect_Voice("Voice4.img/BM2/M1/2-2", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#或者……", 37, 3003755, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM2_MnM_spine/MnM", 'AB', '', 'AB'], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1900);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM2_MnM_spine/MnM", 'B', '', 'B'], [0, 1, 1, 999999, 0, 0, 0, 1]);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(嗯……？视野变暗了。)", 56, 0, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#有什么他想要得到的东西……", 37, 3003755, false, true);
                                                            cm.effect_Voice("Voice4.img/BM2/M1/3-2", 128);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("想得到的东西……", 56, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom('完全看不到前面……', 57, 0, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("请大家把光调到最亮！", 57, 0, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#光被黑暗吞没了！", 37, 3003761, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("我来吧！", 57, 0, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(是真的，光真的被黑暗吞没了，连灯都打不开。)", 57, 0, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(这是怎么回事？)", 57, 0, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("咻……", 57, 0, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(这种状态在这么持续下去可不妙。)", 57, 0, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(首先不知道进入了黑太阳内部的联盟出于什么样的情况。)", 57, 0, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("请大家坚守自己的岗位！\r\n不知道会发生什么，所以一定要小心行动！", 57, 0, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("有人感觉到周围有动静吗？", 57, 0, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#没有感受到特别的动静！", 37, 3003758, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("和其他舰船的通讯怎么样了？", 57, 0, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#还是无法连接通讯！现在无法确保视野，因为没有办法联络其他舰船！", 37, 3003759, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#有问题出现了！战舰的高度在缓缓下降！", 37, 3003760, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#战舰似乎被什么重物缠上了，正在下降！", 37, 3003760, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#已经进入了#r她#k的怀中了。", 37, 3003755, false, true);
                                                                                                          cm.effect_Voice("Voice4.img/BM2/M1/4-2", 128);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom('她？', 56, 0, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("难道……", 56, 0, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0##fs18##b陷入了她跳的黑太阳的舞蹈中……", 37, 3003755, true, true);
                                                                                                                    cm.effect_Voice("Voice4.img/BM2/M1/10-3", 128);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0##fs18##b在遮住眼睛的虚假之手消失", 37, 3003755, true, true);
                                                                                                                      cm.effect_Voice("Voice4.img/BM2/M1/11-1", 128);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0##fs18##b绑住手脚的红线断开之前", 37, 3003755, true, true);
                                                                                                                        cm.effect_Voice("Voice4.img/BM2/M1/12-2", 128);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0##fs18##b只能和她一起跳舞。", 37, 3003755, true, true);
                                                                                                                          cm.effect_Voice("Voice4.img/BM2/M1/13-2", 128);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM2_MnM_spine/MnM", 'BC', '', 'BC'], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM2_MnM_spine/MnM", 'C', '', 'C'], [0, 1, 1, 999999, 0, 0, 0, 1]);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM2_MnM_spine/MnM", 'CD', '', 'CD'], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM2_MnM_spine/MnM", 'D', '', 'D'], [0, 1, 1, 999999, 0, 0, 0, 1]);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom('那里是……？', 56, 0, false, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#……", 37, 3003755, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("梅尔朗？", 56, 0, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#请记住。", 37, 3003755, true, true);
                                                                                                                                            cm.effect_Voice("Voice4.img/BM2/M1/6-1", 128);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("记住？什么……", 56, 0, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM2_MnM_spine/MnM", 'DE', '', 'DE'], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM2_MnM_spine/MnM", 'E', '', 'E'], [0, 1, 1, 999999, 0, 0, 0, 1]);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("咳……视线……！", 56, 0, false, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("梅尔朗！", 56, 0, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM2_MnM_spine/MnM", 'EF', '', 'EF'], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM2_MnM_spine/MnM", 'F', '', 'F'], [0, 1, 1, 999999, 0, 0, 0, 1]);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0##fs18##r一切道路都存在于你的心中……#k", 37, 3003755, false, true);
                                                                                                                                                              cm.effect_Voice("Voice4.img/BM2/M1/7-2", 128);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("道路……", 56, 0, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM2_MnM_spine/MnM", 'FG', '', 'FG'], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1900);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM2_MnM_spine/MnM", 'G', '', 'G'], [0, 1, 1, 999999, 0, 0, 0, 1]);
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                        cm.fieldEffect_取消复合图片动画('A', 0, 0);
                                                                                                                                                                        cm.fieldEffect_取消复合图片动画('B', 0, 0);
                                                                                                                                                                        cm.fieldEffect_取消复合图片动画('C', 0, 0);
                                                                                                                                                                        cm.fieldEffect_取消复合图片动画('D', 0, 0);
                                                                                                                                                                        cm.fieldEffect_取消复合图片动画('E', 0, 0);
                                                                                                                                                                        cm.fieldEffect_取消复合图片动画('F', 0, 0);
                                                                                                                                                                        cm.fieldEffect_取消复合图片动画('G', 0, 0);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.userSetFieldFloating(993063043, 10, 10, 1);
                                                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/tiltship", 100);
                                                                                                                                                                              cm.sendNormalTalk_Bottom("咳……战舰！", 57, 0, false, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#战舰在坠落！", 37, 3003759, true, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.onCameraTilt(20, 5000);
                                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/tiltship", 100);
                                                                                                                                                                                    cm.inGameDirectionEvent_QTE(5);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.onCameraTilt(-20, 3500);
                                                                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/tiltship", 100);
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(50);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.inGameDirectionEvent_QTE(6);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.onCameraTilt(30, 2000);
                                                                                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/tiltship", 100);
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.inGameDirectionEvent_QTE(5);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/tiltship", 100);
                                                                                                                                                                                                  cm.addPopupSay(3003758, 2500, "#face0#操纵杆不听使唤！", '', 0);
                                                                                                                                                                                                  cm.addPopupSay(0, 2500, "#face0#大家一定要抓牢了！", '', 0);
                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(8000);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/dropship", 100);
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.userSetFieldFloating(993063043, 0, 0, 0);
                                                                                                                                                                                                          cm.onCameraTilt(0, 1500);
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, -860, -921);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(4000);
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
                                                                                                                                                                                                                    cm.fieldEffect_PlayBGM("Bgm49/WaveofEmptiness", 0, 0);
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                                                                                                      cm.effect_Text(["#fn黑体##fs18#另一边，能看到黑太阳的地方"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#……", 37, 3003772, false, true);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/gotosun", 100);
                                                                                                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/4"], [0, -1240, -1260, 1, 10, 1, 1, 0]);
                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
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
                                                                                                                                                                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                                                                                                    } else if (status === V++) {
                                                                                                                                                                                                                                      cm.updateInfoQuest(35702, 'toMaze=end');
                                                                                                                                                                                                                                      cm.dispose();
                                                                                                                                                                                                                                      cm.warp(450011120, 0, false);
                                                                                                                                                                                                                                      cm.setStandAloneMode(false);
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
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}