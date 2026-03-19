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
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400971, "oid=1167523", -200, 0, 12, -250, -150, 1, false, false);
      cm.npc_SetSpecialAction("oid=1167523", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=1167523", "stand", -1, 0);
      cm.npc_ChangeController(9400972, "oid=1167524", -130, 0, 12, -180, -80, 1, false, false);
      cm.npc_SetSpecialAction("oid=1167524", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=1167524", "stand", -1, 0);
      cm.npc_ChangeController(9400973, "oid=1167525", -280, 0, 12, -330, -230, 1, false, false);
      cm.npc_SetSpecialAction("oid=1167525", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=1167525", "stand", -1, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNewEffects(9, [0, 0, 0, 0, 0]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
          cm.sendNewEffects(17, [2000, 1500, 2000, -200, 50]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
            cm.sendNewEffects(8, [0, 0, 0, 0, 0]);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("欢迎来到我们的圣地，被选择的人啊！愿美丽沙漠日冕的祝福与你同在！", 37, 9400960, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("啊，好的……\r\n（比起圣地来说，看起来应该是#b庆典现场#k吧……）", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("呵呵……我知道你想说什么。一说是伟大的力量，就只是觉得严肃虔诚那可不行哦！火热的气息与火热的热情更配吧？", 37, 9400961, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("热闹的庆典……有趣的看点……而且还有美味的零食……\r\n……大家充满热情的气氛……也不错……", 37, 9400962, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("看你的表情，你应该还有很多东西没理解吧？呵呵……好的！就让我来给你特别地启示下真理吧！", 37, 9400961, true, true);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=1167524", "action", 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("首先，看看天空！你看到了什么？", 37, 9400961, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNewEffects(17, [1000, 2000, 1500, -200, -2550]);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("天空……？……啊！", 57, 0, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNewEffects(17, [700, 1500, 2000, -200, 50]);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("没错！只要不是傻瓜，肯定马上就发现在冒险岛世界出现的#b伟大力量的标记#k了。", 37, 9400961, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("永恒和伟大光芒的太阳，黑暗的影子遮蔽了太阳，看吧！但是这庄严的力量无法被掩盖，证据就是闪耀的#b日冕的光芒！#k", 37, 9400960, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("越过黑影发出的光芒就是越来越神秘和通灵的力量的证据，也是#b照耀整个冒险岛世界的强大力量和智慧#k的证据！", 37, 9400960, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetSpecialAction("oid=1167523", "action", 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("……那种设定……\r\n简单来说，就是#b在日冕闪耀的期间，福利就能持续#k的意思吧……", 37, 9400962, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("没错！最能吸收伟大气息的地方就是这个尼哈沙漠！这是火热强烈的气息与神秘通灵的光辉和谐共处的圣地！", 37, 9400960, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=1167524", "action", 500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("那就是冒险岛世界一年只有一次的#e#r[日冕庆典]#k#n。\r\n怎么样？神奇吧？厉害吧？哈哈哈哈哈哈！", 37, 9400961, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/wind", 128);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 1000, 0, cm.getPlayer().getId());
                                                    cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetSpecialAction("oid=1167525", 'action', 5000, 0);
                                                      cm.sendNormalTalk_Bottom('……（咀嚼咀嚼）', 37, 9400962, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("…………", 57, 0, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("……你要吃吗？", 37, 9400962, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("…………", 57, 0, true, true);
                                                                cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetSpecialAction("oid=1167523", "action2", 10000, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("呼……所以说没能觉醒的人……", 37, 9400960, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNewEffects(17, [4000, 2000, 1000, -200, -550]);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 3000, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                        } else if (status === V++) {
                                                                          cm.warp(867139000, 3);
                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                          cm.npc_LeaveField("oid=1167523");
                                                                          cm.npc_LeaveField("oid=1167523");
                                                                          cm.npc_LeaveField("oid=1167524");
                                                                          cm.npc_LeaveField("oid=1167524");
                                                                          cm.npc_LeaveField("oid=1167525");
                                                                          cm.npc_LeaveField("oid=1167525");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;