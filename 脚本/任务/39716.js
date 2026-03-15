var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.fieldEffect_Hero9(0, 3000);
      cm.sendNormalTalk_Bottom("#face0#要快点追上老师才行。", 36, 3004322, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("路西德这边应该怎么处理呢？", 56, 0, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#梦境正在被蚕食。由我去救她。", 36, 3003251, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face4#可是……没关系吗？", 36, 3004323, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#请不要担心。我可是对抗梦境的存在。", 36, 3003251, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#她无意识中制造出了我，\r\n说不定就是在为此刻做准备……", 36, 3003251, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face2#为了这个时候……？", 36, 3004323, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face4#啊，我知道了。", 36, 3004323, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face4#人们都希望可以有人在关键时刻阻止自己……拯救自己……", 36, 3004323, true, true);
                    } else {
                      if (status === v++) {
                        cm.curNodeEventEnd(true);
                        cm.eventSKill(0);
                        cm.setInGameDirectionMode(true, false, true);
                        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                        cm.setStandAloneMode(true);
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1200, 0);
                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                      } else {
                        if (status === v++) {
                          cm.fieldEffect_Hero9(100, 10);
                          cm.inGameDirectionEvent_Monologue('帮帮我……', 1);
                        } else {
                          if (status === v++) {
                            cm.inGameDirectionEvent_Monologue("没有人吗……？", 1);
                          } else {
                            if (status === v++) {
                              cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust/0", 0, 2000, 0, 0, 12, 4, 0, -1, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === v++) {
                                cm.inGameDirectionEvent_Monologue("不论是谁都好……拜托……", 1);
                              } else {
                                if (status === v++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === v++) {
                                    cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction23.img/illust/2", 0, 2500, 0, 0, 12, 4, 0, -1, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === v++) {
                                      cm.inGameDirectionEvent_Monologue("啊！你……你是……", 0);
                                    } else {
                                      if (status === v++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === v++) {
                                          cm.fieldEffect_PlayBGM("Bgm46/ClockTowerofNightmare", 0, 0);
                                          cm.inGameDirectionEvent_Monologue("是……梅赛德斯……大人？", 1);
                                        } else {
                                          if (status === v++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === v++) {
                                              cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 3000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                              cm.fieldEffect_复合图片动画(["Effect/Direction23.img/spine/1/buterfly", "animation", '', '01'], [0, 0, 1, 0, 0, 0, 0, 1]);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === v++) {
                                                cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction23.img/illust/1", 0, 3000, 0, 0, 12, 4, 0, -1, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === v++) {
                                                  cm.inGameDirectionEvent_Monologue("#fn黑体##fs23#梅赛德斯大人！！！！", 1);
                                                } else {
                                                  if (status === v++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 3000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                      cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 3000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                    } else {
                                                      if (status === v++) {
                                                        cm.npc_SetSpecialAction("oid=2752524", "special", -1, 1);
                                                        cm.npc_LeaveField("oid=2752525");
                                                        cm.npc_LeaveField("oid=2752525");
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                      } else {
                                                        if (status === v++) {
                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                        } else {
                                                          if (status === v++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === v++) {
                                                              cm.eventSKill(0);
                                                              cm.sendNormalTalk_Bottom("（防毒面具所映射的潜意识原型是……" + (Math.floor(e / 100) == 23 ? '我' : '双弩精灵') + "？！)", 57, 0, false, true);
                                                            } else {
                                                              if (status === v++) {
                                                                cm.sendNormalTalk_Bottom("#face0#总算是免于被梦之深渊吞噬的下场。", 37, 3003251, true, true);
                                                              } else {
                                                                if (status === v++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#但一时半会，她还无法恢复意识。", 37, 3003251, true, true);
                                                                } else {
                                                                  if (status === v++) {
                                                                    var e = cm.getJob();
                                                                    if (Math.floor(e / 100) == 23) {
                                                                      cm.sendNormalTalk_Bottom("怎么会这样……", 57, 0, false, true);
                                                                    } else {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1);
                                                                    }
                                                                  } else {
                                                                    if (status === v++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#抓紧时间。\r\n如果次元门的痕迹彻底消失，就跟不上老师了。", 37, 3004322, true, true);
                                                                    } else {
                                                                      if (status === v++) {
                                                                        cm.sendNormalTalk_Bottom("#face4#该拿路西德如何是好呢？", 37, 3004323, true, true);
                                                                      } else {
                                                                        if (status === v++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#你们放心去吧。\r\n我会将路西德交给市中心的卫兵们。", 37, 3003251, true, true);
                                                                        } else {
                                                                          if (status === v++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#那我打开传送门了。", 37, 3004322, true, true);
                                                                          } else if (status === v++) {
                                                                            cm.dispose();
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.setStandAloneMode(false);
                                                                            cm.npc_SetSpecialAction("oid=2752523", "special", 1, 1);
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/borderless/createPortal", 100);
                                                                            cm.forceStartQuest(39716, '');
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}