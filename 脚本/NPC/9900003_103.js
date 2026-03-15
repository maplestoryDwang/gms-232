var a = 0;
var luckyItem = Array();
var selectedItem;
var pass = true;
var Allitem = Array(2001532, 1482075, 1452104, 1312077, 1482076, 1312068, 2040313, 2040335, 2040337, 2040431, 2040435, 2040522, 2040528, 2040526, 2040540, 2040615, 2040720, 2040819, 2040635, 2040821, 2040941, 2041052, 2040937, 2041054, 2041056, 2043011, 2043106, 2043206, 2043403, 2043706, 2043306, 2043806, 2044006, 2044106, 2044206, 2044218, 2044306, 2044406, 2044506, 2044606, 2044706, 2044811, 2044813, 2044906, 2045206, 2049122, 2049118, 1322007, 1322008, 1322009, 1322010, 1322011, 1322012, 1322056, 1322060, 1322061, 1322065, 1322071, 1332053, 1332057, 1332059, 1332063, 1332066, 1402006, 1402007, 1402008, 1402009, 1402010, 1402011, 1402012, 1402013, 1402015, 3010079, 1442111, 1442110, 1432081, 1422063, 1412062, 1402090, 1322090, 1312062, 2045308, 3010106, 3010107, 3010108, 3010109, 3010110, 3010111, 3010112, 3010113);
function start() {
  a = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1) {
    cm.dispose();
  } else {
    if (f == 1) {
      a++;
    } else {
      a--;
    }
    if (a == -1) {
      cm.dispose();
    } else {
      if (a == 0) {
        if (cm.getPlayer().getGamePoints() < 20) {
          cm.sendNextS("您当前在线时间不足#r20#k分钟,无法参与该活动,\r\n请#r" + (20 - cm.getPlayer().getGamePoints()) + "#k分钟后再试.");
          cm.dispose();
          return;
        }
        if (cm.getPQLog("HOTTIME隐藏的箱子") >= 1) {
          cm.sendNextS("今天你不能再参加这个活动了。\r\n隐藏的箱子活动一天只能进行一次。");
          cm.dispose();
          return;
        }
        for (var V = 1; V < 5; V++) {
          if (cm.getSpace(V) < 1) {
            pass = false;
          }
        }
        if (pass) {
          var w = " #e今天我可能领取到的物品为：#n\r\n#r  - 请仔细看好您要的装备，稍后会打乱目录。\r\n  - 打乱目录后的道具将以问号箱子显示。\r\n  - 届时只要点击你想要的问号箱子，就可以领取道具了！\r\n\r\n#b";
          Allitem.sort(function () {
            return 0.5 - Math.random();
          });
          for (var V = 0; V < Allitem.length; V++) {
            if (V % 5 == 0 && V % 3 == 0) {
              luckyItem.push(Allitem[V]);
            }
          }
          for (var V = 0; V < luckyItem.length; V++) {
            w += '#i' + luckyItem[V] + "# #z" + luckyItem[V] + "#\r\n";
          }
          cm.sendNextS(w);
          cm.setPQLog("HOTTIME隐藏的箱子");
        } else {
          cm.sendOk("请让你的所有背包栏空出一个格子。");
          cm.dispose();
        }
      } else {
        if (a == 1) {
          luckyItem.sort(function () {
            return 0.5 - Math.random();
          });
          var w = "今天的奖品都变成了可疑的箱子，并且被打乱了。\r\n咦，到底是哪个呢？\r\n\r\n#b";
          for (var V = 0; V < luckyItem.length; V++) {
            w += '#L' + V + "##fUI/UIWindow.img/QuestIcon/5/0#    打开便知晓!#l\r\n";
          }
          cm.askMenuS(w);
        } else {
          if (a == 2) {
            var N = U + 1;
            var w = '我刚才选择的是第' + N + "个道具.现在秘密箱子里面的道具跑出来了:\r\n - 点击下一步领取物品。\r\n\r\n#b";
            selectedItem = luckyItem[U];
            for (var V = 0; V < luckyItem.length; V++) {
              if (U == V) {
                w += "#e#i" + luckyItem[V] + "#    #z" + luckyItem[V] + "#   (您选择的箱子 )\r\n#n";
              } else {
                w += '#i' + luckyItem[V] + "#    #z" + luckyItem[V] + "#\r\n";
              }
            }
            cm.sendNextS(w);
          } else if (a == 3) {
            cm.gainItem(selectedItem, 1);
            cm.sendOk("成功打开箱子，我赠送给你了 #b#t" + selectedItem + "##k。");
            cm.dispose();
          }
        }
      }
    }
  }
}
var status = -1;