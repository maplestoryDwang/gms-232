var status = -1;
var selectionLog = [];
var npcs = [9400920, 9400921, 9401160];
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
  var e = cm.getNumberFromQuestInfo(500773, 'manager');
  var H = npcs[e];
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face1##h0#，快来！你今天也会帮助安乐蘑菇屋扩建工程寻找建筑材料吧？", 36, H, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1#如果你今天能找到#i4036748:# #t4036748:#  30个就好了。\r\n消灭#b等级范围怪物#k后，应该就能获得建筑材料。", 36, H, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face1#我会一直等#h0#寻找材料，不要让我等得太晚哦！那么今天也~！拜托你啦！", 36, H, true, true, 1);
        } else if (status === v++) {
          cm.forceStartQuest();
          cm.fieldEffect_PlayFieldSound("Sound/Game.img/QuestClear", 100);
          cm.effect_OnUserEff("Effect/BasicEff.img/QuestClear");
          cm.dispose();
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
  var e = cm.getNumberFromQuestInfo(500773, "manager");
  var H = npcs[e];
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face1#辛苦你了！现在终于可以看到胜利曙光了！\r\n剩下的就是收尾工程了！", 36, H, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1#多亏了#h0#，安乐蘑菇屋可使用的空间比以前宽敞很多呢。 ", 36, H, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face1#竣工之后，我想立马去看看！#h0#也很好奇吧？我们到时候一起去看看吧！", 36, H, true, true, 1);
        } else if (status === v++) {
          cm.forceCompleteQuest();
          cm.updateInfoQuest(501416, "progress=2;today=1");
          cm.gainItem(4036748, -30);
          cm.playerMessage(-1, "可以使用安乐蘑菇屋扩建型图纸啦！");
          cm.我的小屋_解锁房屋户型(1, "安乐蘑菇屋", 17, 19);
          cm.fieldEffect_PlayFieldSound("Sound/Game.img/QuestClear", 100);
          cm.effect_OnUserEff("Effect/BasicEff.img/QuestClear");
          cm.dispose();
        }
      }
    }
  }
}