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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(2074037, "oid=1943223", 160, -11, 5, 110, 210, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1943223", "summon", 0, 0);
      cm.npc_ChangeController(2074100, "oid=1943224", -69, -11, 3, -119, -19, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1943224", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2300, 0, 56, 14);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("……你现在明白了吗？", 37, 2074037, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#你难道……\r\n而我……我，难不成。", 45, 2074100, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("没错，我是，九尾狐。", 37, 2074037, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("而你……就是变成人类的小可爱。", 37, 2074037, true, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 300, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_LeaveField("oid=1943223");
                    cm.npc_ChangeController(2074153, "oid=1943239", 160, -11, 5, 110, 210, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=1943239", "summon", 0, 0);
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#幸会，变成人类的我，\r\n我就是你，而你就是我。", 37, 2074153, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#那……这里是……", 45, 2074100, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#是在你的记忆里，\r\n不，应该说也是我的记忆吧？总之。", 37, 2074153, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#变成人类之后，我的记忆全都被封锁在了这里，\r\n我一直等待着有一天变成人类的你会再次找来这里……", 37, 2074153, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#……我曾经是九尾狐吗？\r\n那怎么会……为什么我现在是人类？", 45, 2074100, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#这我也不知道，\r\n难道是因为宝玉的力量吗？还是说因为太过迫切地渴望？", 37, 2074153, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#嗯，难道是偷走了宝玉的惩罚？", 37, 2074153, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#……\r\n偷走宝玉的惩罚……？啊……", 45, 2074100, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1943224"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#不知你，还记得那句古话吗？\r\n善事会留为佳话，", 45, 2074100, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#……恶事终究会有报应的？\r\n我知道，为什么提这个……", 37, 2074153, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1943239"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#啊！难不成！", 37, 2074153, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetForceMove("oid=1943224", 1, 10, 200);
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#没错，\r\n我会变成人类，#b被威兹大叔发现#k也是，", 45, 2074100, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetForceMove("oid=1943239", -1, 10, 200);
                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#还有#b会再次回到童话村#k也是，", 37, 2074153, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#会#b亲自四处回收宝玉#k也是……", 45, 2074100, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#这所有的一切……\r\n#b都是为偷走宝玉付出代价的旅程#k……", 37, 2074153, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetForceMove("oid=1943224", 1, 10, 200);
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#……还有我还欠着一个债。", 45, 2074100, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetForceMove("oid=1943239", -1, 10, 200);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#……鬼怪。", 37, 2074153, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#我得回去了。", 45, 2074100, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#好吧，回去吧。", 37, 2074153, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#去偿还最后的债。", 45, 2074100, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 300, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else if (status === V++) {
                                                                                cm.dispose();
                                                                                cm.warp(224000080, 1, true);
                                                                                cm.cancelItem(2210191);
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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