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
      cm.sendNormalTalk_Bottom("#face4#好了，应该先干什么呢？", 36, 9401277, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1##b素笑，你该不会……忘记任务了吧？", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face4#确切地说，他说#e#g“素笑，村里的野兽因为不明原因变得狂暴。不仅各种货物被毁，后山也因为太危险而无人敢去，所以你快下山去帮助那些村民”#k#n！", 36, 9401277, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face1##b那最好向村民们打听一下详细的情况。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
          } else {
            if (status === v++) {
              cm.askAcceptDecline_Bottom("#face3#哦！果然不愧是" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "！\r\n先去#e村子中央的商店#n去看看怎么样？", 36, 9401277, 1);
            } else if (status === v++) {
              cm.forceStartQuest(65928, '');
              cm.setPartner(true, 9401309, 80012075, 0);
              cm.dispose();
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
      cm.sendNormalTalk_Bottom("啊呀！原来是玄山派的大侠们啊！", 36, 9401295, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1##b我是玄山派墨玄。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face3#我是玄山派素笑。听说有野兽闯进了村子，所以特地赶来。", 36, 9401277, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("唉，别提了！原来很可爱的摩沙和家兔突然变得非常狂暴！", 36, 9401295, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("没错！！本想着只是兔子而已，结果却吃了大亏。", 36, 9401298, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("但是……最近山魔鬼和木杂鬼也突然多了起来，感觉很奇怪。", 36, 9401295, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("山魔鬼？那不是生活在阴暗峡谷中的东西吗？", 36, 9401298, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("最近有不少人在村子附近见过。难道和野兽们变得狂暴有什么关系？", 36, 9401295, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face3##b（在玄山派内部也发现了。）", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face3##b确实很奇怪。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("唉……不过现在最大的问题是闯入村里的野兽。", 36, 9401295, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face4#明白了。那我先去消灭狂暴的摩沙和家兔。", 36, 9401277, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("谢谢！谢谢你，大侠！", 36, 9401298, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("沿着河边走上一段路，应该就能发现了。", 36, 9401295, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face4#师弟！我们到河边去吧！\r\n我先去查看一下情况。你慢慢过来！", 36, 9401277, true, true, 1);
                                } else if (status === v++) {
                                  cm.updateInfoQuest(65928, "NpcSpeech=94012951");
                                  cm.setPartner(false, 9401309, 0, 0);
                                  cm.OnStartNavigation(875001100, 1, "9401310", 0);
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
      cm.sendNormalTalk_Bottom("#face0#啊……怎么比想象得还多？", 36, 9401277, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1##b原来如此。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else if (status === v++) {
        cm.forceCompleteQuest(65928);
        cm.dispose();
      }
    }
  }
}