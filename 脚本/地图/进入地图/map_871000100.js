var status = -1;
var selectionLog = [];
var npcs = [9400920, 9400921, 9401160];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      var O = cm.getNumberFromQuestInfo(500773, "manager");
      cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/construction", 100);
      if (cm.getQuestStatus(64606) == 2) {
        cm.addPopupSay(npcs[O], 5000, "#face0#新的家是什么样子的呢？只要一想如何装扮新的家，1分钟很快就过去了呢！", '');
        cm.dispose();
      } else {
        cm.updateInfoQuest(64606, "item=0;chk=1");
        cm.sendNormalTalk_Bottom("#face3#啊！房屋不见了！？", 37, 9400920, false, true);
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face1#冷静点，艾米。新的房屋正在建呢，不要担心。", 37, 9400921, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#b新的房屋……", 57, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3#咻，真是吓我一跳！", 37, 9400920, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1##h0#，建新的房屋差不多要花1分钟。你可以在这里等一会儿，也可以去广场或者冒险岛世界待会儿再回来，都随你！", 37, 9400921, true, true);
            } else {
              if (status === V++) {
                cm.askMenu_Bottom("#face1#话说回来，你想要如何装饰新的家呢？\r\n#b#L0#我想装饰成温馨的家。#l\r\n#L1#我想装饰成高级又时尚的家。#l\r\n#L2#我想装饰成环保的家。#l", 37, 9400921);
              } else {
                if (status === V++) {
                  selectionLog[666] = e;
                  if (selectionLog[666] == 0) {
                    cm.sendNormalTalk_Bottom("#face2#温馨的家！光是想想就觉得很好呢。", 37, 9400921, false, true);
                    cm.updateInfoQuest(64606, "item=1;chk=1");
                  } else {
                    if (selectionLog[666] == 1) {
                      cm.sendNormalTalk_Bottom("#face2#高级又时尚的家！光是想想就觉得很好呢。", 37, 9400921, false, true);
                      cm.updateInfoQuest(64606, "item=2;chk=1");
                    } else if (selectionLog[666] == 2) {
                      cm.sendNormalTalk_Bottom("#face2#环保的家！光是想想就觉得很好呢。", 37, 9400921, false, true);
                      cm.updateInfoQuest(64606, "item=3;chk=1");
                    }
                  }
                } else {
                  if (status === V++) {
                    if (selectionLog[666] == 0) {
                      cm.sendNormalTalk_Bottom("#face1#用原木和温暖的布艺家具布置的家里，通过可爱的花蘑菇玩偶来制造亮点！", 37, 9400921, true, true);
                    } else {
                      if (selectionLog[666] == 1) {
                        cm.sendNormalTalk_Bottom("#face1#装饰有雕塑的复古家具和高级的大理石，再用能给人温暖感觉的皮质家具装饰客厅！", 37, 9400921, true, true);
                      } else if (selectionLog[666] == 2) {
                        cm.sendNormalTalk_Bottom("#face1#用原木家具布置家里，装饰客厅！", 37, 9400921, true, true);
                      }
                    }
                  } else {
                    if (status === V++) {
                      if (selectionLog[666] == 0) {
                        cm.sendNormalTalk_Bottom("#face1#肯定会很棒的！再加上散发着饭香的厨房，怎么样？", 37, 9400920, true, true);
                      } else {
                        if (selectionLog[666] == 1) {
                          cm.sendNormalTalk_Bottom("#face1#肯定会很棒的！一定也不能少了象征书香门第的书房吧？", 37, 9400920, true, true);
                        } else if (selectionLog[666] == 2) {
                          cm.sendNormalTalk_Bottom("#face1#肯定会很棒的！再加上散发着饭香的厨房，怎么样？", 37, 9400920, true, true);
                        }
                      }
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#好想法，艾米！", 37, 9400921, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b光是想象就觉得激动呢。", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#现在没剩多少时间了。对了，之前家里的家具都自动放进了家具仓库，你可别忘记了。", 37, 9400921, true, true);
                          } else if (status === V++) {
                            cm.forceCompleteQuest(64606);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;