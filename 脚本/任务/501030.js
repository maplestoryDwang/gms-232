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
      cm.sendNormalTalk("#b#h0##k！你好……", 4, 1012108, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("卡米拉，你好！穿得好漂亮啊。\r\n是要出去郊游吗？", 2, 0, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("#b青草的清香，芬芳的花朵，和煦的天气……#k \r\n温暖的春天终于到了。", 4, 1012108, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("是不是只要看着那些盛开的鲜花……心情就会感觉好起来？", 4, 1012108, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk('嗯，花很漂亮吧。', 2, 0, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("我真的很喜欢花……最近还在学习花语。", 4, 1012108, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("我想把花的美丽告诉冒险岛世界的每一个人……", 4, 1012108, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("啊……！我想到了一个好主意。收集#b闪耀花瓣#k，然后在村里举办花朵庆典，怎么样？", 4, 1012108, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("嗯……好主意。加油！我先告辞了……", 2, 0, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk("你能帮我收集……#b闪耀花瓣#k吗……？", 4, 1012108, true, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk("（我就知道是这样……）", 2, 0, true, true);
                        } else {
                          if (status === v++) {
                            cm.askYesNo("你能帮我收集……#b#e闪耀花瓣#n#k吗……？", 4, 1012108);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk("#b#h0##k，我就知道你一定会帮我……！", 4, 1012108, false, true);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk("好吧……那我就来说明一下#b闪耀花瓣#k。", 4, 1012108, true, true);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk("消灭等级范围内的怪物时，\r\n可以收集到#b#e闪耀花瓣#n#k。", 4, 1012108, true, true);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk("如果你能收集到#r#e100个#n#k闪耀花瓣，\r\n我就把美丽的花语告诉你。", 4, 1012108, true, true);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk("…………", 2, 0, true, true);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk("……我再送你一个美丽的#b花笺#k。", 4, 1012108, true, true);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk("你可以用#b花笺#k在我的商店中\r\n交换想要的东西。请收集花笺，然后交给我。\r\n\r\n\r\n#r※ 每次完成<准备花朵庆典吧！>任务时，可以获得1个花笺。", 4, 1012108, true, false);
                                        } else if (status === v++) {
                                          cm.updateInfoQuest(501031, "current=0");
                                          cm.updateInfoQuest(501032, "count=0");
                                          cm.updateInfoQuest(501033, 'count=0');
                                          cm.forceCompleteQuest(501030);
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}