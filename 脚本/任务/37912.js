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
      cm.sendNormalTalk_Bottom("#face3#这下难办了……估计不好修啊。", 36, 3004850, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("现在怎么办？", 56, 0, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face3#依我看，要修好这个……", 36, 3004851, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("沃莉……你这回一定要忍住……。", 56, 0, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face1#不，不是，我是说外头那些船。\r\n从沉没的残骸中应该可以找到零件吧？", 36, 3004851, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("(嗯……说得有道理。)", 56, 0, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face3#虽说我不想继续在这里冒险……\r\n但也没别的办法。", 36, 3004850, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom('#face3#……。', 36, 3004850, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face3#应该……没有吧？", 36, 3004850, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("嗯？没有呀。", 56, 0, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face3#……。", 36, 3004850, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face3#话说回来，即使是再次见到这情景也还是觉得很可怕。", 36, 3004851, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face3#竟不是实际发生的事情，幸好。", 36, 3004851, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("是啊……", 56, 0, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face3#哈啊……。", 36, 3004850, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face3#休麦？你确定你没事吗？", 36, 3004851, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face3#啊……", 36, 3004850, true, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("#face0#当然了。\r\n照这个程度，我估摸着应该向南哈特申请额外津贴。", 36, 3004850, true, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk_Bottom('#face1#……。', 36, 3004851, true, true, 1);
                                        } else {
                                          if (status === v++) {
                                            cm.sendNormalTalk_Bottom("#face0#我先去修理#b坏掉的无线电发射机#k，你们俩去帮我找#b零件#k。", 36, 3004850, true, true, 1);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk_Bottom("#face0#沃莉负责搜集可用的零件，\r\n#h0#，你负责保护沃莉，消灭来犯的怪物。", 36, 3004850, true, true, 1);
                                            } else {
                                              if (status === v++) {
                                                cm.sendNormalTalk_Bottom("#face0#各人头盔里剩余的氧气只够坚持1小时。\r\n务必严守时间。记住了。", 36, 3004850, true, true, 1);
                                              } else {
                                                if (status === v++) {
                                                  cm.sendNormalTalk_Bottom("知道了。", 56, 0, true, true, 1);
                                                } else {
                                                  if (status === v++) {
                                                    cm.sendNormalTalk_Bottom("#face3#知道了。", 36, 3004851, true, true, 1);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.askYesNo_Bottom("现在走吗？", 56, 3004807, 1);
                                                    } else if (status === v++) {
                                                      cm.updateInfoQuest(37900, "00=h0;10=h0;01=h0;11=h0;20=h0;02=h1;12=h0;21=h0;03=h0;13=h0;04=h0;05=h0;41=h0;06=h0;24=h1;07=h1;25=h1;17=h0;09=h0;w2=open");
                                                      cm.updateInfoQuest(37900, "00=h0;10=h0;01=h0;11=h0;20=h0;02=h1;12=h0;21=h0;03=h0;13=h0;04=h0;14=h1;05=h0;41=h0;06=h0;24=h1;07=h1;25=h1;17=h0;09=h0;w2=open");
                                                      cm.forceStartQuest(37912, '');
                                                      cm.OnStartNavigation(450016120, 0, "east00", 37912);
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
      cm.sendNormalTalk_Bottom("#face0#周围有很多残骸。", 36, 3004851, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#在这里展开搜索怎么样？", 36, 3004851, true, true, 1);
      } else if (status === v++) {
        cm.forceCompleteQuest(37912);
        cm.dispose();
      }
    }
  }
}