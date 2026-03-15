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
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
      cm.sendNormalTalk_Bottom("#face2#啊啊，能听见吗？#h0#。", 36, 1540451, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom('什么事？', 56, 0, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face2#这里是#b埃斯佩拉#k的大本营总部。\r\n在即将进攻#r黑太阳#k之前，紧急投入了特殊作战……（嗞嗞）……", 36, 1540451, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom('？', 56, 0, true, true, 1);
          } else {
            if (status === v++) {
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
              cm.sendNormalTalk_Bottom("#face2#哎呀，通信出障碍（嗞嗞）……通讯兵？这里通……（嗞嗞）……吗？", 36, 1540451, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#我（嗞嗞）……可……看看吗？", 36, 3003500, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face2#沃莉？？我不知道你对机器……有研究……吗。", 36, 1540451, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#你让让。\r\n……不听话的时候……像这样！#r（咚！）#k这样！#r（咚！）#k", 36, 3003500, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face2#不是，你在干什么？！\r\n这样完全……（嗞嗞……）坏……（嗞嗞嗞嗞）", 36, 1540451, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                        cm.sendNormalTalk_Bottom("#face2##r（嗞嗞嗞嗞嗞……。嗞嗞嗞……)", 36, 1540451, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom('……。', 56, 0, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.askYesNo_Bottom("亲自去看看比较好。\r\n\r\n#b（※ 接受时，将移动到任务地区。）", 56, 3004801, 1);
                          } else if (status === v++) {
                            cm.forceStartQuest(37901, '');
                            cm.updateInfoQuest(37900, "00=h1");
                            cm.updateInfoQuest(37900, "00=h1;41=h0");
                            cm.dispose();
                            cm.warp(993185000, 0, false);
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
      cm.sendNormalTalk_Bottom("休麦？", 56, 0, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#啊，#ho#。你好。", 36, 3003502, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("你在这里干什么？", 56, 0, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#……没什么。\r\n在回埃德尔斯坦之前，有事情要做。", 36, 3003502, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("返回？回埃德尔斯坦吗？", 56, 0, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#我的任务到此为止。现在我要回家了。", 36, 3003502, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#可是……\r\n既然你也来了，要不帮忙带带路。", 36, 3003502, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#来，这边。", 36, 3003502, true, true, 1);
                  } else if (status === v++) {
                    cm.forceCompleteQuest(37901);
                    cm.gainExp(132738181);
                    cm.forceStartQuest(37902, '');
                    cm.updateInfoQuest(37900, "00=h0;41=h0");
                    cm.updateInfoQuest(37900, "00=h0;01=h1;41=h0");
                    cm.dispose();
                    cm.warp(450007010, 1, false);
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