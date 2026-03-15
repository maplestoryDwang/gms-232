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
      cm.sendNormalTalk_Bottom("#face0#真是的……我还以为这是个不错的行动。", 36, 2570105, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#依我看，现在想了结那家伙恐怕太迟了。", 36, 2570103, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#踹门冲进去的同时，立即开弓射穿他的脑袋怎么样？", 36, 2570103, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face3#如果是这样，团长还是站远点儿吧。\r\n我听说你落选的原因是……", 36, 2570105, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face4#哇啊啊！！你还不快闭嘴？！！", 36, 2570103, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#嗯……突然放冷箭的话，有点太卑鄙了吧？", 36, 2570101, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face4#(这家伙是认真的吗……。)", 36, 2570105, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face4#(百分百是真心的。)", 36, 2570103, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face4#(怎么还有这样的……。)", 36, 2570102, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("……。", 56, 0, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("再试一次吧。\r\n瑞恩，能办到吗？", 56, 0, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom('#face3#当然。', 36, 2570103, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face3#不用太紧张。就算失败了，也还有机会。", 36, 2570102, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face4#你，你别说得好像肯定会失败似的……。", 36, 2570103, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("(进入#b右边#k传送口。)", 56, 0, true, true, 1);
                                } else if (status === v++) {
                                  cm.forceStartQuest(37808, '');
                                  cm.npc_LeaveField('oid=23601');
                                  cm.npc_LeaveField("oid=23602");
                                  cm.npc_LeaveField("oid=23603");
                                  cm.npc_LeaveField("oid=23604");
                                  cm.npc_LeaveField("oid=23605");
                                  cm.npc_LeaveField("oid=23606");
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
      cm.sendNormalTalk_Bottom("#face0#艾里葛斯·都纳米斯？", 36, 2570101, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#在陛下身上发现的书里是这么写的。", 36, 2570102, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#好像是我们对抗的那个#r恶魔的名字#k……\r\n还附上了几点说明。", 36, 2570102, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#召唤仪式成功后，就可以将本体留在异界，在当前世界里生成分身。", 36, 2570102, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#生成的分身会从异界的本体吸收力量……\r\n这个过程大约要花上半天到一天的时间……。", 36, 2570102, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#从半天到一天……", 36, 2570101, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#也就是说，一旦我们逆转时间，\r\n从那一刻开始，#r时间耽误得越久，那家伙就越会呈指数级迅速变强#k。", 36, 2570102, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#这么说我们没时间歇息……得抓紧时间了。", 36, 2570105, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#可不知怎么的……我感觉身体很沉……", 36, 2570103, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#奇怪。\r\n每次逆转时间的时候，不但伤口会愈合，身体的疲劳也会得到恢复。", 36, 2570101, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#身体上的疲劳，当然是有的。但还不至于造成精神上的疲劳。", 36, 2570102, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("精神上的疲劳……原来如此。\r\n刚才是第几次尝试？", 56, 0, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#是第七次。", 36, 2570101, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face3#对了，瑞恩的箭只射中了其中的三次。", 36, 2570105, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face4#额……", 36, 2570103, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face0#七次……\r\n按每次三个小时来算的话，差不多一整天都在战斗了。\r\n要是不觉得累才奇怪呢。", 36, 2570102, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face0#原来是这样，我说怎么感觉越来越精神恍惚……", 36, 2570103, true, true, 1);
                                    } else if (status === v++) {
                                      cm.forceCompleteQuest(37808);
                                      cm.updateInfoQuest(37808, 'exp=1');
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
        }
      }
    }
  }
}