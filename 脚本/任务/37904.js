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
      cm.sendNormalTalk_Bottom("#face0#南哈特。（窃窃私语）……", 36, 3004324, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face2#啊，正巧准备工作刚刚结束。", 36, 1540451, true, true, 1);
      } else {
        if (status === v++) {
          cm.askYesNo_Bottom("#face2#有东西给你们看。大家走吧。", 36, 1540451, 1);
        } else if (status === v++) {
          cm.forceStartQuest(37904, '');
          cm.updateInfoQuest(37900, "00=h0;01=h0;41=h0");
          cm.updateInfoQuest(37900, "00=h0;01=h0;02=h1;41=h0");
          cm.updateInfoQuest(37900, "00=h0;01=h0;02=h1;03=h1;41=h0");
          cm.updateInfoQuest(37900, "00=h0;01=h0;02=h1;03=h1;41=h0;09=h1");
          cm.updateInfoQuest(37900, "00=h0;01=h0;02=h1;03=h1;41=h0;24=h1;09=h1");
          cm.updateInfoQuest(37900, "00=h0;01=h0;02=h1;03=h1;41=h0;24=h1;25=h1;09=h1");
          cm.npc_LeaveField('oid=52556');
          cm.npc_LeaveField("oid=52558");
          cm.npc_LeaveField('oid=52559');
          cm.npc_LeaveField("oid=52560");
          cm.npc_LeaveField("oid=52562");
          cm.npc_LeaveField("oid=52565");
          cm.npc_LeaveField("oid=52566");
          cm.dispose();
          cm.warp(450007050, 1, false);
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
      cm.sendNormalTalk_Bottom("#face3#这……这不是#b海蜇号#k吗？！", 36, 3003502, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face3#这个……你怎么带回来的？", 36, 3003502, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face2#这是为了此次作战，从#b埃德尔斯坦#k紧急空运过来的。\r\n据说已做了许多改良，在性能上应该会比较可靠。", 36, 1540451, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#南哈特，检查完毕了。", 36, 3004157, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("需要潜水艇吗？但在莫拉斯……", 56, 0, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face2#随着太初之海发生异变，环境与之前发生了很大改变。", 36, 1540451, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face2#好，现在就等驾驶员过来了。\r\n沃莉、#h0#，你们二位可以在等待期间看看操纵方法。", 36, 1540451, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face3#我想想……说明书在……", 36, 3003500, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#沃莉？那个……你把说明书那倒了。", 36, 3004157, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face1#啊，是吗？应该这么看吗？", 36, 3003500, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#嗯……啊！我知道了！像这样看就行！", 36, 3003500, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#哦……再从那里往左拐一下……。", 36, 3004157, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face1#……。", 36, 3003500, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face3#……。", 36, 3003502, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face3#南哈特，等等。", 36, 3003502, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face2#怎么了？", 36, 1540451, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face3#我……我来操纵吧。", 36, 3003502, true, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("#face3#那家伙不好对付。\r\n我对它比较熟悉，交给我吧。", 36, 3003502, true, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk_Bottom("#face2#嗯……突然调整人员有点困难……。", 36, 1540451, true, true, 1);
                                        } else {
                                          if (status === v++) {
                                            cm.sendNormalTalk_Bottom("#face2#休麦说得有道理，我批准了。", 36, 1540451, true, true, 1);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk_Bottom("#face3#呃……", 36, 3003502, true, true, 1);
                                            } else {
                                              if (status === v++) {
                                                cm.sendNormalTalk_Bottom("#face3#终究是被卷进去了……", 36, 3003502, true, true, 1);
                                              } else if (status === v++) {
                                                cm.forceCompleteQuest(37904);
                                                cm.gainExp(132738181);
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