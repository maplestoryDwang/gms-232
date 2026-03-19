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
      cm.npc_ChangeController(3003251, 'oid=48479', 786, 51, 7, 736, 823, 0, true, false);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNormalTalk_Bottom("#face0#(#ho#！#ho#！必须快点救他！)", 37, 3003251, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#(呃！我的头… 记忆全部涌进来。啊啊……这是…噩梦，噩梦……)", 37, 3003251, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#(她要找的…………难道不是他。)", 37, 3003251, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("防毒面具？是你救了我啊！", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#…………", 37, 3003251, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("可是……掉入神秘河的生命体……\r\n不是马上就会跟艾尔达分离吗？", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayBGM("Bgm46.img/ClockTowerofNightmare", 0, 0);
                      cm.sendNormalTalk_Bottom("#face0#如果既不是人类，也不是艾尔达，就不会被分解吧。", 37, 3003251, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#她要找的人是我。\r\n路西德所警戒的噩梦就是我，#b我就是那噩梦。#k", 37, 3003251, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom('怎么会？！', 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#只有我可以偷看到路西德的记忆。\r\n只有我在梦境减弱时，也会随之变弱。", 37, 3003251, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#你还记得我曾经因为自己有没有“灵魂”而苦恼吗？\r\n答案算是已经出来了。", 37, 3003251, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("防毒面具……", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#你走吧，#ho#。现在请你不要管我了。", 37, 3003251, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#我只是路西德在潜意识里创造出来的#b虚像#k而已。", 37, 3003251, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("虽然我不太懂什么灵魂，但有一点，我可以明确地告诉你。", 57, 0, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("当你为了生存、为了救活别人而不断挣扎时，\r\n你已经不再是虚像。", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("你比任何人都真真切切地“活着”。", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#…………", 37, 3003251, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#最后一个音乐盒位于时间塔。", 37, 3003251, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_同时移动镜头和人(1, 500);
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("必须前往右边尽头处的时间塔。", 57, 0, false, true);
                                                            } else if (status === V++) {
                                                              cm.dispose();
                                                              cm.warp(450003000, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;