var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (cm.getQuestStatus(38008) == 1) {
    action38008(f, W, U);
  } else {
    if (cm.getQuestStatus(38018) == 1) {
      action38018(f, W, U);
    } else if (cm.getQuestStatus(38023) == 1) {
      action38023(f, W, U);
    } else {
      cm.dispose();
    }
  }
}
function action38023(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.forceStartQuest(38023, "clear");
      cm.sendNormalTalk("这，完全是出乎意料的礼物，竟然让我有些惊慌…………难道说这意味着要把我接纳到尖耳狐狸一族吗。家人…………把我当成家人…………", 16, 3002013, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("不知不觉，已经过去了很长时间。黑魔法师、封印、冒险岛世界，一切感觉就像是做梦一样。我已经适应了这里的生活了吗？什么时候才能回到冒险岛去呢？不，我现在想过要回去吗？", 16, 3002013, true, true);
      } else if (status === V++) {
        cm.updateInfoQuest(38023, '');
        cm.forceStartQuest(38023, 'clear');
        cm.forceCompleteQuest(38023);
        cm.updateInfoQuest(38903, '');
        cm.forceStartQuest(38903, '');
        cm.gainExp(4000);
        cm.gainItem(1142671, 1);
        cm.forceStartQuest(32023, '');
        cm.forceCompleteQuest(32023);
        cm.dispose();
      }
    }
  }
}
function action38018(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk("什，什么东西？那个毛茸茸的东西？有种非常强烈的感觉，那东西不能随便碰……", 17, 0, false, true);
    } else {
      if (status === V++) {
        cm.forceStartQuest(38018, "clear");
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, true, true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.sendNormalTalk("这个…………难道你说的为我准备的礼物就是这#r狐狸耳朵和尾巴#k吗？哈啊，这似乎的确是狐狸们想出的礼物…………比我预想的伤害还要大。", 17, 0, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("虽然很不情愿，但是连这次的礼物也拒绝的话就太不礼貌了…………那我就恭敬不如从命了，再…………", 17, 0, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_ChangeEquipment([1004039, 1102650]);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk('……！', 17, 0, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_ChangeEquipment([0]);
                cm.sendNormalTalk("…………不行，这样不行。自从和狐狸们在一起精神似乎有些异常了。振作起来吧。不能再被卷入其中了！这个…………必须先收到看不见的地方才行。", 17, 0, true, true);
              } else if (status === V++) {
                cm.updateInfoQuest(38018, '');
                cm.forceStartQuest(38018, "clear");
                cm.forceCompleteQuest(38018);
                cm.gainExp(3000);
                cm.setInGameDirectionMode(false, true, false);
                cm.dispose();
                cm.warp(940200030, 0, false);
              }
            }
          }
        }
      }
    }
  }
}
function action38008(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk("这是……什么啊？好像是用树叶包起来的什么东西。分量很重，还热乎乎的。好像还有点潮乎乎的。嗯？里面好像有什么东西在流动？这粘稠的感觉……难道这是？！", 16, 3002013, false, true);
    } else {
      if (status === V++) {
        cm.updateInfoQuest(38008, '');
        cm.forceStartQuest(38008, 'clear');
        cm.forceCompleteQuest(38008);
        cm.gainExp(1200);
        cm.sendNormalTalk("所谓狐狸们准备的礼物难道就是这#r生肝#k吗？这么看来，我好像确实听说过狐狸们喜欢#r动物的生肝#k。", 16, 3002013, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("…………好吧，我连生肉都吃，当然不会不能吃生肝了，不过…………不过…………！这实在不符合我的饮食习惯，没办法。哈啊，自从来到这个村子，我已经好几次感到这里的食物和我的饮食习惯不符了！", 16, 3002013, true, true);
        } else if (status === V++) {
          cm.forceStartQuest(38009, '');
          cm.updateInfoQuest(38009, '');
          cm.dispose();
        }
      }
    }
  }
}