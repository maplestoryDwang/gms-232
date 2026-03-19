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
  } else if (status === V++) {
    cm.spawnMobLimit(4230139, 1, 520, -795, 1);
    cm.userSetFieldFloating(221030840, 0, 3, 1);
    cm.addPopupSay(2052010, 1000, "#face1#咳咳！实在是无处可逃啊！这家伙不过是个吸尘器，怎么力量这么惊人！", '', 0);
    cm.addPopupSay(2052012, 1000, "#face2#没错，小心点，#ho#！特别是它的身体撞击超具有威胁性，注意不要碰到！", '', 0);
    cm.addPopupSay(2052015, 1000, "#face1#难不成是我小时候弄坏的吸尘器的冤魂现在跑来向我报仇了？", '', 0);
    cm.addPopupSay(2052012, 1000, "#face0#别胡说了，还是赶紧想想怎么逃出去吧！", '', 0);
    cm.addPopupSay(2052015, 1000, "#face1#难不成是我青少年时期弄坏的吸尘器的冤魂现在跑来向我报仇了？", '', 0);
    cm.addPopupSay(2052012, 1000, "#face1#……算了吧，算了。", '', 0);
    cm.updateInfoQuest(3494, "pass=1");
    cm.addPopupSay(2052009, 1000, "#face1#哇啊啊啊！危险！这实在是太危险了！", '', 0);
    cm.addPopupSay(2052015, 1000, "#face2#别担心，宅宅，我阿亮会救你出去的！", '', 0);
    cm.addPopupSay(2052009, 1000, "#face0#哎呀呀~和冒险勇士展开真正的冒险！实在是太刺激了，好危险啊！", '', 0);
    cm.addPopupSay(2052015, 1000, "#face1#……这种剧情展开倒是出乎意料啊？", '', 0);
    cm.addPopupSay(2052015, 1000, "#face0#喂！绿虎！你既然对情报这么有自信，怎么都不知道这个吸尘器呢！？", '', 0);
    cm.addPopupSay(2052012, 1000, "#face1#我怎么知道白外星人吸尘器的型号！别不讲理！", '', 0);
    cm.addPopupSay(2052013, 2000, "这是KA-UNG-RHRMQCJDTHRL-GKQFLWJRDLSRKRUR，纪念白外星节的限量版型号。", '', 0);
    cm.addPopupSay(2052012, 1500, "#face1#我说，这种事情你是怎么知道的……", '', 0);
    cm.addPopupSay(2052010, 1000, "#face2#额！再这样下去，#ho#可能会有危险的！", '', 0);
    cm.dispose();
    cm.scheduleWarpTask(120, 221030802, 0);
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;