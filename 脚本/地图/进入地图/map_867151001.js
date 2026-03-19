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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(9401219, 'oid=579710', -125, 60, 5, -175, -75, 1, false, 0, false);
      cm.npc_SetSpecialAction('oid=579710', 'summon', 0, 0);
      cm.npc_ChangeController(9401220, 'oid=579711', 60, 60, 7, 10, 110, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=579711", "summon", 0, 0);
      cm.npc_ChangeController(9401221, 'oid=579712', -40, 60, 8, -90, 10, 1, false, 0, false);
      cm.npc_SetSpecialAction('oid=579712', 'summon', 0, 0);
      cm.sendNewEffects(12, [0, -1300, -25]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.effect_Text(["#e#fs30#探险总部", ''], [100, 2000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
          cm.sendNewEffects(13, [5000, 1200, 0]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(2, 250);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("欢迎，#h0#！欢迎你来到冒险岛探险队总部！", 36, 9401219, false, true, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.sendNewEffects(17, [1000, 1000, 2000, -150, 100]);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("哦！这位就是队长所说的大名鼎鼎的#h0#啊？幸会！", 36, 9401221, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("嗯……？不就是个普通的勇士嘛？看起来也并不是很厉害的样子啊？", 36, 9401220, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("这可是贵客，不得失礼！你们快去帮忙做好勘探的准备工作！", 36, 9401219, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("明白～", 36, 9401221, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("好，好，这就去，是我傻，之前还满怀期待。", 36, 9401220, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('这里到底是干什么的？', 56, 0, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("这个问题好！当然相信你也已经知道了，这里是我们#b冒险岛探险队#K的探险总部。", 36, 9401219, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("而我就是这支探险队的队长#b海多尼#k！你也可以直接叫我#b多尼#k！", 36, 9401219, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("要是懒得记名字，直接叫我一声#b队长#k也行，我的手下全都是这么叫我的！", 36, 9401219, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=579710", 1);
                                            cm.sendNewEffects(13, [1000, 100, 0]);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("那边长得像头熊的家伙是#b小云#k，虽然有些笨重，不过心地善良，是个值得信赖的补给官，也是我最爱惜的手下！", 36, 9401219, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNewEffects(13, [1000, -50, 0]);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("那边那个家伙叫#b小风#k，虽然偶尔有些搞不清楚她脑子里在想些什么，不过实力那可是绝对超群！她是我们探险队的首席研究员！", 36, 9401219, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_setForceFlip("oid=579710", -1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("除此之外，我们#b冒险岛探险队#k还集结着众多冒险家，为的就是前往冒险岛世界各地尚未有人踏足的未知地带探险，当然，很快你也会成为其中的一员！", 36, 9401219, false, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("你还有些搞不清楚状况吧？无妨！谁都有第一次嘛！", 36, 9401219, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.updateInfoQuest(501090, "dir=1");
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNewEffects(14, [0, 2000, 1000]);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNewEffects(19, [0]);
                                                                } else if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                  cm.npc_LeaveField('oid=579710');
                                                                  cm.npc_LeaveField("oid=579711");
                                                                  cm.npc_LeaveField("oid=579712");
                                                                  cm.dispose();
                                                                  cm.warp(867151000, 0, true);
                                                                } else {
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