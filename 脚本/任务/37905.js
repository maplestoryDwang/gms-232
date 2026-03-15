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
      cm.sendNormalTalk_Bottom("#face2#那么，现场指挥就请休麦负责。\r\n据我所知，你过去曾在埃德尔斯坦的#b潜水部队#k服役过。", 36, 1540451, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom('潜水部队？', 56, 0, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#是也有过那样的时候。", 36, 3003502, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face2#他能娴熟地操作各种装备，一定可以很好地领导二位。", 36, 1540451, true, true, 1);
          } else {
            if (status === v++) {
              cm.askYesNo_Bottom("#face2#等你准备好了，就进入潜水艇。", 36, 1540451, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#我和沃莉先去潜水艇里进行修整，你准备好了就进来。", 36, 3003502, false, true, 1);
              } else if (status === v++) {
                cm.forceStartQuest(37905, '');
                cm.updateInfoQuest(37900, "00=h0;01=h0;02=h1;03=h0;41=h0;24=h1;25=h1;09=h1");
                cm.updateInfoQuest(37900, "00=h0;01=h0;02=h1;03=h0;41=h0;24=h1;25=h1;09=h0");
                cm.updateInfoQuest(37900, "00=h0;01=h0;20=h1;02=h1;03=h0;41=h0;24=h1;25=h1;09=h0");
                cm.updateInfoQuest(37900, "00=h0;01=h0;20=h1;02=h1;21=h1;03=h0;41=h0;24=h1;25=h1;09=h0");
                cm.dispose();
                cm.warp(450016280, 1, false);
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
      cm.sendNormalTalk_Bottom("#face3#这股恶臭依然如故。\r\n毕竟它沉没过一次，这也没办法……。", 36, 3003502, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#沉没的？\r\n可它又被重新打捞上来，投入作战……\r\n真可称得上是身经百战的勇士。了不起。", 36, 3003500, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("(一般人不是会觉得不不吉利吗……)", 56, 0, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face3#已检查了仪表盘，检查了气压系统……", 36, 3003502, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#好，准备工作大致结束了。现在就等引擎预热了。", 36, 3003502, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#对了，沃莉，当时你下去看到的海底是怎样的？", 36, 3003502, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face3#水里很浑浊，几乎看不清前方。\r\n只知道有什么东西穿过水流扑了过来……造成了非常强烈的冲击。", 36, 3003500, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face1#啊，说起来，触感也非常……诡异。软乎乎的……", 36, 3003500, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face3#软乎乎……？嗯……是头足类吗。如果是个大家伙，可不好办。", 36, 3003502, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#话说回来，在视野不明的水下遭遇那样的事情，一般人都会陷入恐慌，\r\n总之啊，沃莉还真是胆大。", 36, 3003502, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#我就当你在夸我了。", 36, 3003500, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#在大海里，越胆大的家伙越早死。", 36, 3003502, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face1#……。", 36, 3003500, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#来，精神都绷紧了。现在要下沉了。", 36, 3003502, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face1#这，不是应该说得手吗？", 36, 3003500, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face0#那不一样嘛。", 36, 3003502, true, true, 1);
                                  } else if (status === v++) {
                                    cm.dispose();
                                    cm.warp(993185003, 0, false);
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