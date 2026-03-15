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
      cm.sendNormalTalk_Bottom("#face0#团长，看样子我们恐怕都中了恶魔的诅咒。", 36, 2570101, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom('好像是那样。', 56, 0, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#现在怎么办？", 36, 2570103, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("我们的任务是什么来着？", 56, 0, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom('#face0#圣……', 36, 2570101, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#是守护圣瑞尼亚。", 36, 2570104, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("对，你答对了。", 56, 0, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("计划没变。再次去消灭他。", 56, 0, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#但那家伙保不准会再次施下诅咒。", 36, 2570102, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#嗯……在那家伙施下诅咒之前，我们一起冲上去给他干掉不就行了？", 36, 2570103, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face3#哈哈，我喜欢这个行动。", 36, 2570105, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face5#哦……那个……那事有点太卑鄙，不好让骑士来做吧……", 36, 2570101, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("……。", 56, 0, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face4#……。", 36, 2570103, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face4#……。", 36, 2570105, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face4#我说你是白痴吗……。", 36, 2570102, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("就按瑞恩说的办。", 56, 0, true, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("若是被包围，会很危险，大家分头从各个通道进入后，再重新集合。", 56, 0, true, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk_Bottom("(通过#b右边传送口#k移动。)", 56, 0, true, true, 1);
                                        } else if (status === v++) {
                                          cm.forceStartQuest(37806, '');
                                          cm.npc_LeaveField("oid=23577");
                                          cm.npc_LeaveField('oid=23578');
                                          cm.npc_LeaveField("oid=23579");
                                          cm.npc_LeaveField("oid=23580");
                                          cm.npc_LeaveField('oid=23581');
                                          cm.npc_LeaveField('oid=23582');
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
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
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
      cm.sendNormalTalk_Bottom("此处暂停。", 56, 0, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom('大家都闭上眼睛。', 56, 0, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face5#什么？眼睛？", 36, 2570103, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face3#有人丢钱包了吗？\r\n那我猜犯人应该是……", 36, 2570105, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face4#先，先说好，不是我。", 36, 2570103, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#我的钱包安然无恙。", 36, 2570104, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom('……。', 56, 0, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face4#不是，我是让你闭上眼睛，事先学着适应黑暗……", 36, 2570101, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face4#唉……我竟落选了……\r\n竟把我视为和这些家伙是一个水平的……？", 36, 2570102, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face3#哈哈，开玩笑的。我想缓解下气氛嘛。", 36, 2570105, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#那犯人是谁？", 36, 2570104, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face4#所以说是开玩笑啦……", 36, 2570105, true, true, 1);
                          } else if (status === v++) {
                            cm.forceCompleteQuest(37806);
                            cm.updateInfoQuest(37806, "exp=1");
                            cm.gainExp(5872020);
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