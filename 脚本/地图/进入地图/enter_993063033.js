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
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("这种……感觉是……？", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("又在……拉着我……！！！", 57, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("还……还剩了些什么……！！！", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.fieldEffect_PlayBGM("Bgm33/AriantInMirror", 0, 0);
                cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(咳……眼前……突然变得一片明亮……)", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("！！！", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(阿里安特？我不是在迷宫里吗……？)", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#死又死不了，要这么活到什么时候啊……", 37, 3003776, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#自从得到青春秘药之后，我就不断萌生出各种贪念……", 37, 3003777, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(青春秘药……？那个……我明明已经交给阿斯旺的美迪莎了。是阿烈达王妃得到了它？怎么得到的？)", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#逃亡的人越来越多……剩下的人会变得更辛苦……我们也该离开了吧？", 37, 3003777, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#其实逃跑的那些人……", 37, 3003776, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#听说不是逃跑的。", 37, 3003776, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#什么？那大家都在哪里？", 37, 3003777, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#这个嘛……有传闻说王妃把他们关在王宫里的某个地方，吸收他们的生命。", 37, 3003776, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#获得秘药后，可以用其他人的生命力永葆青春。", 37, 3003776, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#这也太不像话了！", 37, 3003777, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#总之有这些闹得人心惶惶的传闻，最近也发生了很多奇怪的事，你小心一些。", 37, 3003776, true, true);
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
                                                        cm.updateInfoQuest(35727, "dir1=2");
                                                        cm.dispose();
                                                        cm.warp(993063034, 0, true);
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