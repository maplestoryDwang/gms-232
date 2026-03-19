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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(1530220, "oid=1988775", 962, 38, 13, 912, 1012, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1988775", "summon", 0, 0);
      cm.npc_ChangeController(1530030, "oid=1988776", 1320, 38, 20, 1270, 1370, 1, true, 1000, false);
      cm.npc_SetSpecialAction("oid=1988776", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1142, 3);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("警察已经来了, 你放心吧. 变态在哪里? ", 37, 1530220, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("我原本就听说附近有可疑黑影出没, 所以正在巡查. 你要是协助我, 我会非常感谢. ", 37, 1530220, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("汪, 汪汪! (装得差不多就行了, 你这个笨蛋! )", 37, 1530030, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("那么, 变态去哪里了呢? ", 37, 1530220, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("你是说逃走了? 在那么短的时间里? ", 37, 1530220, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("嗯……是吗? 你看到他的脸了吗? 着装呢? ", 37, 1530220, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                          cm.effect_Text(["#fnNanumGothic ExtraBold##fs26#稍后……", ''], [100, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("嗯……那按照你所说, ", 37, 1530220, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("你的意思, 在我到来之前, 那个披着黑斗篷、全身挂着一条条锁链的变态一直在这里. 而被发现后, 他在仅仅3秒种内就跑出500米, 消失在了你视野中, 是这样没错吧? ", 37, 1530220, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("(连连点头)", 57, 0, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('……', 37, 1530220, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('……', 57, 0, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("毫无可信度可言……你, 是不是在国外待过啊? 听语气总觉得你不像这里的人. ", 37, 1530220, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("! ", 57, 0, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("我看你连智能手机都不太会用……反正, #b#h0##k, 你说你是学生对吧? 你要是再遇到可疑的人, 就联系我吧. ", 37, 1530220, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove("oid=1988775", -1, 150, 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_LeaveField("oid=1988775");
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_ForcedFlip(1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("喂, 我们得悄悄行动. 你把警察招来, 那该怎么办啊? ", 37, 1530030, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("你见到警察要躲远点, 要是被缠住那可就糟了. 特别是那种脑子灵活聪明的警察, 你更加要当心! ", 37, 1530030, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("总之, 尘土在平时非常不显眼……可当他们达到一定数量后, 普通人就能看见他们. 你能不能到那~边的尘土地带, 帮我消灭一些尘土呢? \r\n#b(在喷泉公园的尘土地带消灭90只尘土吧. )#k", 37, 1530030, true, true, 1);
                                                      } else if (status === V++) {
                                                        cm.inGameDirectionEvent_ForcedFlip(0);
                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.forceStartQuest(32746, '');
                                                        cm.forceCompleteQuest(33054);
                                                        cm.getTopMsgFont("已在电话簿中添加了赫丽娜. ", 3, 20, 20, 0, 0);
                                                        cm.npc_LeaveField("oid=1988776");
                                                        cm.dispose();
                                                        cm.warp(330001700, 1, false);
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}