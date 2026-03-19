var status = -1;
var selectionLog = [];
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
      cm.setStringForQuestInfo(3847, "Result", 'complete');
      var O = cm.getNumberFromQuestInfo(3847, "Floor");
      var b = cm.getNumberFromQuestInfo(3847, "Time");
      var w = "辛苦啦。再接再厉继续挑战。\r\n\r\n<最近记录信息>\r\n#b  - 排名区间：精通\r\n  - 通关层数：" + O + "层\r\n  - 花费时间：" + b + "秒#k\r\n\r\n";
      cm.setNumberForQuestInfo(100466, "Time", cm.getNumberFromQuestInfo(3847, 'Time'));
      cm.setNumberForQuestInfo(100466, "Scr", 1);
      var L = cm.getNumberFromQuestInfo(100466, "Floor");
      if (O > L) {
        cm.getTopMsgFont("- 达成最高纪录 -", 3, 25, 4, 0);
        if (L % 100 < 15 && O % 100 >= 15) {
          w += "这次你突破了第十五层！这是你的额外奖励：\r\n#i3700305##b#t3700305#\t#i1082710##b#t1082710#\r\n\r\n#k";
          cm.gainItem(3700305, 1);
          cm.gainItem(1082710, 1);
        }
        if (L % 100 < 30 && O % 100 >= 30) {
          w += "这次你突破了第三十层！这是你的额外奖励：\r\n#i3700306##b#t3700306#\t#i1082394##b#t1082394#\r\n\r\n#k";
          cm.gainItem(3700306, 1);
          cm.gainItem(1082394, 1);
        }
        if (L % 100 < 45 && O % 100 >= 45) {
          w += "这次你突破了第四十五层！这是你的额外奖励：\r\n#i3700307##b#t3700307#\t#i1082393##b#t1082393#\r\n\r\n#k";
          cm.gainItem(3700307, 1);
          cm.gainItem(1082393, 1);
        }
        if (L % 100 < 63 && O % 100 >= 63) {
          w += "这次你突破了武陵道场的所有关卡！真是太了不起了！这是你的额外奖励：\r\n#i3700308##b#t3700308#\t#i1082392##b#t1082392#\r\n\r\n#k";
          cm.gainItem(3700308, 1);
          cm.gainItem(1082392, 1);
        }
        cm.setNumberForQuestInfo(100466, 'Floor', O);
      }
      if (cm.getMapId() == 925020003) {
        cm.getPlayer().dropMessage(-1, "恭喜，你已经通关了武陵道场的所有关卡.");
      }
      cm.sendNormalTalk(w, 5, 2091011, false, false);
      cm.武陵道场_更新记录();
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;