var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  var V = -1;
  var w = cm.getMapId();
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status == V++) {
      if (w == 104020000) {
        var N = "想要去金海滩度假吗？现在可是开业大酬宾，正是旅游的好时间哦！\r\n\r\n";
        N += "#L1##b移动到金海滩。（费用：800金币)#l";
      } else {
        var N = "怎么，想要回去了吗？在这里玩得开心吧？\r\n\r\n";
        N += "#L1##b移动到六岔路口。（费用：800金币)#l";
      }
      cm.askYesNo(N);
    } else {
      if (status == V++) {
        if (cm.getMeso() >= 800) {
          cm.gainMeso(-800);
          if (w == 104020000) {
            cm.sendOk("你绝对不会后悔这趟旅行的。出发喽！");
          } else {
            cm.sendOk("怎么样，金海滩不错吧？下次来这里旅游记得还选我的航班啊！");
          }
        } else {
          cm.sendOk("飞行的费用是800金币，有足够的金币在来找我吧。");
          cm.dispose();
        }
      } else if (status == V++) {
        if (w == 104020000) {
          cm.warp(120040000, 0);
        } else {
          cm.warp(104020000, 3);
        }
        cm.dispose();
      } else {
        cm.dispose();
      }
    }
  }
}