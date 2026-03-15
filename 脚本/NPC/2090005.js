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
      if (cm.getMapId() == 251000000) {
        cm.askYesNo("你好？冒险家，旅途愉快吗？没有像我一样的翅膀，是不是有些不方便？最近在帮一些没有翅膀的人直接飞往 #b武陵#k。怎样？有兴趣吗？只需要#b500 金币#k就可以。");
      } else {
        if (cm.getMapId() == 250000100) {
          cm.askMenu("你好啊，冒险家！旅行进行得愉快吗？你不像我这样有翅膀，旅途中该很多不便。最近我在帮助那些没有翅膀的人们去往别的地区，你需要帮忙吗？那么选择你要去的地方吧。#b\r\n#L0#天空之城(1500 金币)#l\r\n#L1#百草堂(500 金币)#l");
        } else if (cm.getMapId() == 200000141) {
          cm.askMenu("你好？冒险家，旅途愉快吗？没有像我一样的翅膀，是不是有些不方便？最近在帮一些没有翅膀的人移动。怎样？有兴趣吗？那么选择想去的地方。#b\r\n#L0#武陵(1500 金币)#l");
        } else {
          cm.sendOk('这条航线还没有开辟。');
          cm.dispose();
        }
      }
    } else {
      if (status === V++) {
        if (cm.getMapId() == 251000000) {
          if (cm.getMeso() < 500) {
            cm.sendNext("你有足够的金币吗？");
          } else {
            cm.gainMeso(-500);
            cm.warp(200090300, 0);
            cm.scheduleWarpTask(60, 250000100);
          }
        } else {
          if (cm.getMapId() == 250000100) {
            if (select == 0) {
              if (cm.getMeso() < 1500) {
                cm.sendNext("你有足够的金币吗？");
              } else {
                cm.gainMeso(-1500);
                cm.warp(200090310, 1);
                cm.scheduleWarpTask(60, 200000100);
              }
              cm.dispose();
            } else if (cm.getMeso() < 500) {
              cm.sendNext('你有足够的金币吗？');
            } else {
              cm.gainMeso(-500);
              cm.warp(200090300, 0);
              cm.scheduleWarpTask(60, 251000000);
            }
          } else if (cm.getMapId() == 200000141) {
            if (cm.getMeso() < 1500) {
              cm.sendNext('你有足够的金币吗？');
            } else {
              cm.gainMeso(-1500);
              cm.warp(200090300, 0);
              cm.scheduleWarpTask(60, 250000100);
            }
          }
        }
        cm.dispose();
      }
    }
  }
}