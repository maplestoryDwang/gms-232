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
      cm.sendNormalTalk_Bottom("#face0#什么时候回玄山看看？", 36, 9401277, false, true, 1);
    } else {
      if (status === v++) {
        cm.spawnMobLimit(9601653, 1, 427, 284, 100);
        cm.sendNormalTalk_Bottom("#face1##b把爬山也当成修炼的一部分吧。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#是……像太阳一样灿烂的墨玄" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '。', 36, 9401277, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0##b要像兔子一样跳上去吗？", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face2#不！应该马上去向掌门人报告！", 36, 9401277, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face3#要是知道你消灭掉了狂暴的野兽，修复了野兽造成的损失，他一定会称赞你的吧？", 36, 9401277, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face1##b当然。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face3#嘿嘿嘿！加油往上爬吧！\r\n我先走一步，在瀑布前面见，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "！我们比比谁先到吧！", 36, 9401277, true, true, 1);
                  } else if (status === v++) {
                    cm.OnStartNavigation(875000101, 1, '9401314', 65932);
                    cm.forceStartQuest(65932, '');
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
      cm.sendNormalTalk_Bottom("#face1##b跑得还挺快，和兔子似的。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom('#face1#嘿嘿，' + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，我知道你手下留情了。\t", 36, 9401277, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face8#但是" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，你仔细看看。这不是林达尔吗！", 36, 9401277, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face8#过来一看，就发现倒在了这里。", 36, 9401277, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0##b让我们来看看……", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
            } else {
              if (status === v++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/rindal1", 100);
                cm.sendNormalTalk_Bottom("#face0##b好像还活着。最好先送到村里的医生那里去。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom('#face3#是！' + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '！', 36, 9401277, true, true, 1);
                } else if (status === v++) {
                  cm.dispose();
                  cm.warp(875003013, 0, false);
                }
              }
            }
          }
        }
      }
    }
  }
}