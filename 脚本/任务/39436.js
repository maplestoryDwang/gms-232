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
      cm.sendNormalTalk_Bottom("该隐，你可知道冒险岛世界的诸多势力为了对抗黑魔法师组建了冒险岛联盟一事？", 36, 3003658, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("因为最近决定与格兰蒂斯的万神殿议会结盟，格兰蒂斯的勇士也在鼎力相助。", 36, 3003658, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("如果该隐你不介意，不如也来加入冒险岛联盟吧？", 36, 3003658, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("不光是影子商团和狼牙，附近接受过该隐你帮忙的人都极力推荐你呢。", 36, 3003658, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（什么情况，难道背后调查过我？既然这个势力拥有如此庞大的情报网，搞不好日后能帮到我，怎么做好呢？）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
            } else {
              if (status === v++) {
                cm.askAcceptDecline_Bottom("如果你感兴趣，我现在就送你去联盟所在的圣地。\r\n\r\n #r（※接受后自动前往任务地图。）#k", 36, 3003658, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("这么想就对了，等你到了圣地就去找找南哈特大人，他应该早就听说过你了。", 36, 3003658, false, true, 1);
                } else if (status === v++) {
                  cm.forceStartQuest(39436, '');
                  cm.dispose();
                  cm.warp(130000000, 0, false);
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
      cm.sendNormalTalk_Bottom("#face0#欢迎来到女皇之岛圣地，\r\n我是冒险骑士团的谋士南哈特。", 36, 3003651, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#你就是那个叫该隐的吧，我可没少听说你的事迹，你来得正好。", 36, 3003651, true, true, 1);
      } else if (status === v++) {
        cm.forceCompleteQuest(39436);
        cm.dispose();
      }
    }
  }
}