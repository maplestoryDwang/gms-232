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
      if (cm.getNumberFromQuestInfo(501159, "tuto") > 0) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
      cm.inGameDirectionEvent_AskAnswerTime(250);
      cm.curNodeEventEnd(true);
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
              cm.onTeleport(0, 3, cm.getPlayer().getId(), -450, 50);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -450, 50);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                  cm.inGameDirectionEvent_AskAnswerTime(100);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#h0#！谢谢你应邀前来。", 37, 9062345, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("孩子们准备了#r#e丰富多彩的游戏项目#n#k和大量#b#e甜蜜的糖果#n#k！", 37, 9062345, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("嘿嘿。这是孩子们亲手准备的派对。\r\n当然，我也帮了不少忙。", 37, 9062344, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("孩子们为庆典准备了许多#b#e糖果#n#k。\r\n你可以在享受庆典的同时获得糖果。\r\n#i4310301# #t4310301#\r\n#i4310302# #t4310302#\r\n#i4310303# #t4310303#", 133, 9062344, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("你可以用三种糖果交换孩子们在课堂上制作的#r#e各式各样的礼物#n#k！", 37, 9062345, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, -650, 50);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#i4310301#寻找#t4310301#，交给#r#e月光强化商店#n#k的#b#e库迪#n#k，可以交换好东西。", 37, 9062345, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1500, 5000, 120, 50);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("收集#i4310303# #t4310303#，交给#r#e棉花糖工坊#n#k的#b#e乌尼#n#k，可以领取孩子们亲手制作的礼物。", 37, 9062344, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#i4310303#你可以在#b#e耶波尼#n#k的#r#e小游戏展台#n#k收集#t4310303#！", 37, 9062345, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1500, 5000, 1100, 50);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("收集#i4310301# #t4310301#交给#b#e帕伊尼#n#k，就可以使用#r#e魔杖#n#k了！\r\n这可是拥有特殊能力的强大魔杖！", 37, 9062345, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("请去找一旁的#b#e托希#n#k吧。\r\n参与#r#e星星气球连环爆#n#k，可以收集#i4310302# #t4310302#。", 37, 9062344, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("多多收集#i4310302# #t4310302#，可以获得孩子们在秘药制作课上制作的#r#e成长秘药#n#k。", 37, 9062344, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
                                                        cm.inGameDirectionEvent_AskAnswerTime(250);
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
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -450, 50);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("这是为你准备的#r#e邀请函#n#k！\r\n你可以随时随地使用这张邀请函参与庆典！\r\n点击邀请函上的#b#e<GO>标识#n#k，即可前往派对现场。\r\n\r\n#r ※ 点击左侧的星星提示，可以打开邀请函。", 133, 9062345, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("也可以查看你收集到的#r#e糖果数量#n#k。\r\n\r\n如果还有问题，就点击邀请函的#b#e<?> 标识#n#k吧！\r\n我很乐意为你解惑。", 37, 9062345, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("赶快去找孩子们吧。", 37, 9062345, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
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
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                          } else if (status === V++) {
                                                                                            cm.setStandAloneMode(false);
                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                            cm.updateInfoQuest(501159, "tuto=1");
                                                                                            cm.openUI(1281);
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