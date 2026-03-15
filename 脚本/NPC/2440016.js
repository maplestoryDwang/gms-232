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
      cm.askMenu("这个村子叫做武陵，武陵就是武陵桃园的缩写。那么请听题。武陵桃园是什么意思？\r\n#b#L0#高高山脊的地方#l \r\n#b#L1#非要让人修炼的地方#l \r\n#b#L2#理想乡，极乐净土#l", 0, 2440016);
    } else {
      if (status === V++) {
        if (U == 2) {
          cm.askMenu("武陵的人们都为了成仙修炼，那么神仙是什么？\r\n#b#L0#修道之后离开人类世界与自然共存的人#l \r\n#b#L1#比人类更了不起的人类#l \r\n#b#L2#神奇海鲜的缩写#l", 0, 2440016);
        } else {
          cm.sendOk("确定吗？你再好好想想。");
          cm.dispose();
        }
      } else {
        if (status === V++) {
          if (U == 0) {
            cm.askMenu("你们俩基础还不错嘛，那就出最后一题了。把你们送进来的那个修炼生叫什么名字？要在武陵生活的话，必须要记好每个人的名字~\r\n#b#L0#诺功#l \r\n#b#L1#武公#l \r\n#b#L2##p2440001##l", 0, 2440016);
          } else {
            cm.sendOk("确定吗？你再好好想想。");
            cm.dispose();
          }
        } else {
          if (status === V++) {
            if (U == 2) {
              cm.sendNormalTalk("呵呵~还不错嘛？好，就当你们通过了理论课程。拿到修炼证物了吧？拿到了就可以出去了，万一以后需要药物的话，别忘了#p2440004#~", 0, 2440016, false, true);
              cm.gainItem(4033831, 1);
            } else {
              cm.sendOk("确定吗？你再好好想想。");
              cm.dispose();
            }
          } else if (status === V++) {
            cm.dispose();
            cm.warp(324000000, 8, false);
          }
        }
      }
    }
  }
}