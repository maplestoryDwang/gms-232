var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
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
      if (cm.isQuestActive(58952) && !cm.haveItem(4034139)) {
        cm.sendNormalTalk("你好，哈哈哈。我是传承了家族的匠人精神的第100代铁匠。我能帮你做点什么？", 0, 9130115, false, true);
      } else {
        cm.sendNormalTalk("你好，哈哈哈。我是传承了家族的匠人精神的第100代铁匠。", 0, 9130115, false, false);
        cm.dispose();
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk("听说您能修好#i4034138##t4034138#，所以我来请您帮忙。", 2, 9130115, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("这是……？这个用我们家族代代相传的秘方最后一章的最后一行上记载的方法应该能修好，不过……", 0, 9130115, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("有什么问题吗？", 2, 9130115, true, true);
          } else {
            if (status === V++) {
              cm.askMenu("嗯……哈哈哈，其实最近的铁匠真的很辛苦，所以我的要价比较高。你如果给我1000000金币，那我马上就能修好。\r\n#b\r\n#L0#给他1，000，000金币进行修理。#l\r\n#L1#不，这个太贵了，不修了。#l", 0, 9130115);
            } else {
              if (status === V++) {
                if (U == 0) {
                  if (cm.getMeso() >= 1000000) {
                    cm.sendNormalTalk("#b(哐哐，完成了。)#k", 0, 9130115, false, true);
                    cm.gainMeso(-1000000);
                  } else {
                    cm.sendNormalTalk("你的金币不够啊。", 0, 9130115, true, false);
                    cm.dispose();
                  }
                } else {
                  cm.sendNormalTalk('那真是太遗憾了。', 0, 9130115, true, false);
                  cm.dispose();
                }
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("基本上已经完成了！！", 0, 9130115, true, false);
                  cm.gainItem(4034138, -1);
                  cm.gainItem(4034139, 1);
                } else if (status === V++) {
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