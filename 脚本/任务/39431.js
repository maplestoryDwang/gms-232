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
      cm.sendNormalTalk_Bottom("#face0#你就是那个该隐啊，德拉卡兹的高手。", 36, 3001250, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（是诺巴啊，看样子并不知道我是黑色诺巴呢。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#图仑城中最后的德拉卡兹啊……\r\n要是出手帮你，搞不好会卷入不必要的事情，不过……", 36, 3001250, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#毕竟是阿莫斯奶奶所托之事，我也不能置之不理，\r\n好吧，要我帮什么忙？", 36, 3001250, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#我的名字叫该隐，还有，眼下我倒是没有什么特别的需要，短期内我打算先旅旅行。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#旅行啊……", 36, 3001250, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#那要不要去诺巴族的万神殿看看？通过那里的次元传送口可以前往一个叫冒险岛世界的不同次元的世界，\r\n非常适合全新出发。", 36, 3001250, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（万神殿……另一个次元的世界啊……）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#我会考虑考虑的。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#要是能换个名字就再好不过了，要比该隐更符合冒险家的气质……\r\n#h0#，怎么样？", 36, 3001250, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0##h0#……这也太不会起名字了。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#还有，我给你提一个建议，\r\n如果你想隐瞒身份，不如先改改你的语气。", 36, 3001250, true, true, 1);
                          } else if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#这段时间以普通冒险家的身份示人应该能护你周全，\r\n那就祝你旅途愉快了，#h0#。", 36, 3001250, true, true, 1);
                            cm.forceStartQuest(39431, '');
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
      cm.sendNormalTalk_Bottom("#face0#啊，不是，这么快就要走了吗？\r\n毕竟阿莫斯有托于我，我本想好好请你吃顿饭，再带你四处看看的……\r\n那，那没办法了，慢，慢走！", 37, 3001542, false, true, 1);
    } else if (status === v++) {
      cm.forceCompleteQuest(39431);
      cm.dispose();
    }
  }
}