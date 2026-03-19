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
      cm.npc_ChangeController(9400581, "oid=204514", -279, -65, 18, -329, -229, 0, true, false);
      cm.npc_ChangeController(9400583, 'oid=204515', -349, -65, 18, -399, -299, 0, true, false);
      cm.npc_ChangeController(9400598, "oid=204516", -393, 53, 14, -443, -343, 0, true, false);
      cm.npc_ChangeController(9400585, 'oid=204517', -405, -65, 18, -455, -355, 0, true, false);
      cm.npc_ChangeController(9400597, 'oid=204518', -450, 53, 14, -500, -400, 0, true, false);
      cm.npc_ChangeController(9400600, "oid=204519", 1, -175, 35, 1, 51, 1, true, false);
      cm.npc_ChangeController(9400586, "oid=204520", 61, -175, 35, 20, 111, 1, true, false);
      cm.npc_ChangeController(9400580, 'oid=204521', -82, -65, 18, -132, -32, 1, true, false);
      cm.npc_ChangeController(9400582, "oid=204522", -26, -65, 18, -76, -20, 1, true, false);
      cm.npc_ChangeController(9400585, "oid=204523", -452, -65, 18, -502, -402, 0, true, false);
      cm.npc_ChangeController(9400635, 'oid=204524', 303, -175, 37, 253, 353, 1, true, false);
      cm.npc_ChangeController(9400617, 'oid=204525', -567, 95, 9, -617, -517, 0, true, false);
      cm.npc_ChangeController(9400618, "oid=204526", -617, 95, 9, -667, -567, 0, true, false);
      cm.npc_ChangeController(9400596, "oid=204527", -667, 96, 8, -717, -617, 0, true, false);
      cm.npc_ChangeController(9400596, 'oid=204528', -718, 99, 8, -768, -668, 0, true, false);
      cm.npc_ChangeController(9400585, 'oid=204529', 55, 83, 28, 20, 105, 1, true, false);
      cm.npc_ChangeController(9400585, "oid=204530", 116, 85, 28, 66, 166, 1, true, false);
      cm.npc_ChangeController(9400585, "oid=204531", 173, 80, 29, 123, 223, 1, true, false);
      cm.npc_ChangeController(9400599, "oid=204532", -278, 99, 10, -328, -228, 0, true, false);
      cm.npc_ChangeController(9400599, "oid=204533", -335, 97, 10, -385, -285, 0, true, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.sendNewEffects(17, [0, 1000, 2000, -300, -60]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9400592, "oid=7531379", -565, -75, 18, -615, -515, 0, true, false);
        cm.npc_SetSpecialAction("oid=7531379", 'summon', 0, 0);
        cm.forceStartQuest(64167, "sober");
        cm.npc_ChangeController(9400596, "oid=7531380", -620, -75, 18, -670, -570, 0, true, false);
        cm.npc_SetSpecialAction("oid=7531380", "summon", 0, 0);
        cm.npc_ChangeController(9400589, "oid=7531381", 150, -180, 36, 100, 200, 1, true, false);
        cm.npc_SetSpecialAction("oid=7531381", "summon", 0, 0);
        cm.npc_ChangeController(9400635, "oid=7531382", 240, -180, 36, 190, 290, 1, true, false);
        cm.npc_SetSpecialAction("oid=7531382", "summon", 0, 0);
        cm.npc_ChangeController(9400636, "oid=7531383", 303, -180, 37, 253, 353, 1, true, false);
        cm.npc_SetSpecialAction("oid=7531383", "summon", 0, 0);
        cm.sendNormalTalk_Bottom("#face0#你有什么打算？", 37, 9400581, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#b和刚才说的一样，在路上设置障碍物，修复城墙不是罪要紧的吗？", 57, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#好，那障碍物… ", 37, 9400581, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNewEffects(12, [3000, 40, -160, 0, 0]);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=7531381", -1, 220, 80);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#遍地的好材料。", 37, 9400589, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#木头！", 37, 9400580, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#b木头！", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#对那个我可是行家。", 37, 9400589, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#b和佩图尔在一起，肯定不会有问题。", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#好吧，那么这件事就托付给你了。", 37, 9400581, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNewEffects(12, [0, -500, -70, 0, 0]);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=7531379", 1, 50, 30);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#… 那个，我也… 比较擅长斧工…！", 37, 9400592, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#哦，对呀。你以前也耍过两把斧子吧。", 37, 9400589, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNewEffects(12, [0, -500, -70, 0, 0]);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove("oid=7531380", 1, 50, 30);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("那我也一起去！总得有个人把风吧。", 37, 9400596, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNewEffects(12, [0, -90, -160, 0, 0]);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetForceMove("oid=7531382", -1, 100, 70);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("这片森林我比较熟悉，我来带你们过去吧！", 37, 9400603, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNewEffects(19, [0]);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#这么多人在一起，我就不用担心了。", 37, 9400581, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#又回到森林里去，是不是疯了？！", 37, 9400597, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("… ", 37, 9400598, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetForceMove("oid=7531383", 1, 30, 30);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("那个… 我还得守住城墙… ", 37, 9400603, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#b对，当然那个也很重要。… 非常感谢。", 57, 0, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#b这么多人在一起，肯定能马上搞定！", 57, 0, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#好，快去快回。", 37, 9400581, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#巴特勒副团长不一起去吗？", 37, 9400582, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#我还有需要紧急处理的事情，这么些个人足够了吧。", 37, 9400581, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#b凯恩，差不多了，我们这就出发。", 57, 0, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#路上小心，#h0#。", 37, 9400580, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#… 我也因为要保护艾丽卡，所以没法去帮你们。很抱歉，#h0#。", 37, 9400582, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#b不不，那是凯恩要做的事情。", 57, 0, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#又去抓独眼触须怪吗？", 37, 9400582, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#… 原来那些家伙变成小偷是有名堂的啊？", 37, 9400582, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#b什么？", 57, 0, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#没什么，路上小心。", 37, 9400582, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#b那么我们就抓紧出发吧！", 57, 0, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("请随我来！", 37, 9400603, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else if (status === V++) {
                                                                                                          cm.forceStartQuest(64107, '');
                                                                                                          cm.dispose();
                                                                                                          cm.warp(867202600, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;