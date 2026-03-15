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
      cm.sendNormalTalk_Bottom("#face0#其实昨天据点之中有重要的物件被盗，\r\n看起来应该是那对兄妹所为。", 36, 3004907, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#看样子打从一开始被人抓回来就是为了偷走特定物品。", 36, 3004907, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face1#（什么……？！）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#那些家伙偷走的是什么东西？", 36, 3004910, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#此事为安保事项，我没办法说。", 36, 3004907, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#到底是怎么从屋顶逃走的？难不成是有人出手相助？", 36, 3004911, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#怎么会，明知道会落得什么下场，有谁会这样？", 36, 3004910, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face2#嗯……", 36, 3004904, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.askAcceptDecline_Bottom("#face0#来，现在要开始作战了，大家都安静点。\r\n#b各位只要去周围打探犯罪分子的行迹，#k找到嫌疑人的下落就好，\r\n任务难度为中下，成功时将发放50点点数作为奖励。", 36, 3004907, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#差强人意吧，好吧，那就分开行动。", 36, 3004910, false, true, 1);
                        } else {
                          if (status === v++) {
                            cm.forceStartQuest(39408, '');
                            cm.updateInfoQuest(39400, "51=h0;52=h0;80=h0;53=h0;81=h0;54=h0;82=h0;73=h0;74=h0;83=h0;75=h1;57=h1;84=h0;76=h1;85=h1;77=h1");
                            cm.updateInfoQuest(39400, "51=h0;52=h0;80=h0;53=h0;81=h0;54=h0;82=h0;73=h0;74=h0;83=h0;75=h0;57=h1;84=h0;76=h1;85=h1;77=h1");
                            cm.updateInfoQuest(39400, "51=h0;52=h0;80=h0;53=h0;81=h0;54=h0;82=h0;73=h0;74=h0;83=h0;75=h0;57=h1;84=h0;76=h0;85=h1;77=h1");
                            cm.updateInfoQuest(39400, "51=h0;52=h0;80=h0;53=h0;81=h0;54=h0;82=h0;73=h0;74=h0;83=h0;75=h0;57=h1;84=h0;76=h0;85=h1;77=h0");
                            cm.updateInfoQuest(39400, "51=h0;52=h0;80=h0;53=h0;81=h0;54=h0;82=h0;73=h0;74=h0;83=h0;75=h0;57=h1;84=h0;76=h0;85=h0;77=h0");
                            cm.OnStartNavigation(410000418, 0, '', 39408);
                            cm.sendNormalTalk_Bottom("#face0#（前往右边，对付#b飞速巴伊托兹#k。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#（反正据点里的那些人是肯定不可能来这里翻的……）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#（只要稍微演一演，假装在找就可以了吧……）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                              } else if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#(那些家伙可一定要乖乖地待在橱柜里啊……)", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
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
      cm.sendNormalTalk_Bottom("#face0#(这个家伙总感觉怪怪的，要不试着上前搭个话？)", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
    } else if (status === v++) {
      cm.dispose();
      cm.warp(993164008, 0, true);
    }
  }
}