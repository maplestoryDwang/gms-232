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
      cm.npc_ChangeController(1530050, "oid=20815322", 341, 179, 5, 291, 391, 1, true, false);
      cm.npc_SetSpecialAction("oid=20815322", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("你说那些尘土怪隐藏在学校的各个角落？那么学生们岂不是很危险？？", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("幸好那些尘土怪通常是不会出现的，只是隐藏在隐秘的地方。", 37, 1530050, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("可即使这样也不能掉以轻心。因为要是有更危险的攻击型怪物出现的话，可就糟糕了。就是你之前交过手的那个让人头疼的大怪物。我们就简单称其为#r闹事者#k吧。", 37, 1530050, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("闹事者会在满足什么条件的情况下出现呢？", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("这个嘛，你很快就会知道了。", 37, 1530050, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("现在更重要的是……#h0#同学应该尽可能地过着平凡的学校生活。尤其是和我或者埃尔文对话的事，千万不能让旁人发现。因为在这个没有魔法的世界和动物对话，在人们眼中是非常奇怪的事。", 37, 1530050, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("啊，有人上来了呃！喵喵~~", 37, 1530050, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(1530100, "oid=20818409", -210, 179, 3, -260, -160, 0, true, false);
                          cm.npc_SetSpecialAction("oid=20818409", "summon", 0, 0);
                          cm.npc_ChangeController(1530080, "oid=20818410", -315, 179, 3, -365, -265, 0, true, false);
                          cm.npc_SetSpecialAction("oid=20818410", 'summon', 0, 0);
                          cm.npc_ChangeController(1530090, "oid=20818411", -410, 179, 2, -460, -360, 0, true, false);
                          cm.npc_SetSpecialAction("oid=20818411", "summon", 0, 0);
                          cm.inGameDirectionEvent_MoveAction(1);
                          cm.inGameDirectionEvent_AskAnswerTime(100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_MoveAction(0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("咦，你是谁呀？抱歉，这里是我们的地盘。", 37, 1530100, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("别说话像个流氓似的，胡克。", 37, 1530080, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("话说回来，这人我好像从没见过。", 37, 1530090, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("是啊，我也是第一次见……啊，我知道了！你是转校生吧？", 37, 1530100, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("关于你的传闻已经在学校传得沸沸扬扬的了。说你用一根手指就把1年级的小流氓揍得昏迷不醒了。", 37, 1530100, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("不是，我听说是用脚趾。", 37, 1530080, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("不是，我听说用的只是气场。", 37, 1530090, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#b（怎么办，传闻已经越来越离谱了……）#k", 57, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushScaleInfo(1000, 4000, 800, -240, 195);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                      cm.effect_Text(["#fn黑体##fs26#胡克\r\n2年级, 跆拳道部部长"], [100, 2000, 4, 0, 0, 1, 4, 0, 0, 0]);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(1000, 4000, 800, -310, 195);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                            cm.effect_Text(["#fn黑体##fs26#米哈尔\r\n2年级, 剑道部部长"], [100, 2000, 4, 0, 0, 1, 4, 0, 0, 0]);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_PushScaleInfo(1000, 4000, 800, -400, 195);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                  cm.effect_Text(["#fn黑体##fs26#伊卡尔特\r\n2年级, 局外人"], [100, 2000, 4, 0, 0, 1, 4, 0, 0, 0]);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                    } else if (status === V++) {
                                                                      cm.forceCompleteQuest(32736);
                                                                      cm.gainItem(4030038, -50);
                                                                      cm.dispose();
                                                                      cm.warp(330000500, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;