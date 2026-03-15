/*
 * 新版次元入侵InvasionEvent
 * 2016年7月2日 09:28:08
 * TODO:
 * 副本次元手套兑换
 * 副本段位奖励兑换
 */
var ee = "#fEffect/CharacterEff/1051296/1/0#";
var pointsId = 167200;
var status;
var minLevel = 150; //最低等级
var maxLevel = 255; //最高等级
var channel = 1; //设置可以执行的频道
//限制人数
var minPlayers = 1;
var maxPlayers = 6;
//怪物最大等级设置
var moblevel = 255;
//副本开关 开启、true 关闭、false
var open = true;
//组队log记录
var PQ = '副本_次元入侵';
//开始地图
var startmap = 940020000;
//配置文件名称
var eventname = "副本_次元入侵";
var em, vipstr;

//设置每日次数
var maxenter = 5;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.dispose();
		return;
	} else if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {
		if (cm.getMapId() != startmap) { //传送
			cm.askMenu("#e<副本 - " + PQ + ">#n\r\n你现在确定放弃任务,从这里出去?\r\n#L2##b是的,现在就出去#l");
		} else {
			if (open) {
				vipstr = "#r开放中#b";
			} else {
				vipstr = "#r未开启#b";
			}
			var p = new Points();
			var points = p.getEventPoints(pointsId, cm.getPlayer().getId()); //目前積分
			var Ranking = RankingName(points);
			var text = "#d在冒险岛世界，格兰蒂斯被进攻了。这场超越次元的侵略到底是由谁发动的呢…………#k\r\n\r\n#n#b"
			text += "#L0#" + ee + " 进入次元入侵（状态：#e" + vipstr + "#n）。#l\r\n";
			text += "#L1#" + ee + " #d领取每日通关奖励。#l\r\n"
			text += "#L5#" + ee + " #r段位奖励预览。#l\r\n"
			text += "#L3#" + ee + " #d领取段位首次奖励。#l\r\n"
			text += "#L20#" + ee + " 听取有关次元入侵的说明。#l\r\n"
			//text += "#L4#" + ee + " #r全服玩家段位排位榜。#l\r\n"
			cm.askMenu(text, 0, 9020009);
		}
	} else if (status == 1) {
		if (selection == 0) {
			em = cm.getEventManager(eventname);
			if (em == null) {
				cm.sendOk("配置文件不存在,请联系管理员。");
				cm.dispose();
				return;
			}

			var pqtry = maxenter - cm.getPlayerLog(PQ);
			var rwpz = "";
			rwpz += "#e推荐等级：" + minLevel + " - " + maxLevel + "";
			rwpz += "        推荐人数：" + minPlayers + " - " + maxPlayers + "  \r\n#b已进行普通模式：" +  cm.getPlayerLog(PQ) + " 次       剩余挑战次数：" + pqtry + " 次#k";
			rwpz += "\r\n普通模式状态：" + vipstr + "        #n";
			var zyms = "";
			zyms = "#e<副本 - " + PQ + ">#n\r\n#b#h0# \n\#k你想挑战次元入侵副本吗？\r\n" + rwpz + "\r\n";
			zyms += "#L1##b是的,我们现在就去！#l\r\n\r\n";
			cm.askMenu(zyms, 0, 9020009);

		} else if (selection == 1) { //领取boss奖励
                       if(cm.getPlayerLog("每日次元副本次数") >= 5 && cm.getPlayerLog("次元副本5次奖励") < 1){
                            cm.addPlayerLog("次元副本5次奖励")
                            cm.gainItem(5062010,10)
                            cm.gainItem(5062500,10)
                            cm.gainItem(2614057,3)
                            cm.getPlayer().modifyCSPoints(1,5000)
                            cm.getPlayer().modifyCSPoints(2,5000)
		         cm.dispose();
		         cm.sendOkS("已领取奖励#v5062010#x10 #v5062500#x10 #v2614057#x3\r\n#r点券x5000 抵用券x5000");
                   }else {
                            if(cm.getPlayerLog("每日次元副本次数") > 0 && cm.getPlayerLog("每日次元副本次数") < 5 && cm.getPlayerLog("次元副本1次奖励") < 1){
                            cm.addPlayerLog("次元副本1次奖励")
                            cm.gainItem(2614002,3)
                            cm.gainItem(5062000,6)
                            cm.gainItem(5062002,6)
		         cm.dispose();
		         cm.sendOkS("已领取奖励#v2614002#x3 #v5062000#x6 #v5062002#x6");
                   }else{
		         cm.sendOkS("你今天还没有通关次元入侵或者已经领取过奖励，赶紧去挑战吧~!");
		         cm.dispose();
}
}
		} else if (selection == 4) { //全服排名
			Ranking1();
			cm.dispose();
			//cm.openNpc(0);
		} else if (selection == 5) { //排位奖励浏览  Ⅴ  Ⅳ   Ⅲ   Ⅱ  Ⅰ
			var p = new Points();
			var points = p.getEventPoints(pointsId, cm.getPlayer().getId()); //目前積分
			var Ranking = RankingName(points);
			cm.sendOk("- #e#d排位奖励如下：   当前段位："+ Ranking +"【"+ points +"】#n#k\r\n\r\n#g【最强王者荣耀】 #b可领取 #r#t1142742# #bx 1\r\n#g【超凡大师】 #b可领取 #r#t2431412# #bx 1\r\n#r【钻石Ⅰ】 #b可领取 #r#t1032219# #bx 1\r\n#r【钻石Ⅱ】 #b可领取 #r150级防具箱 #bx 1\r\n#r【钻石Ⅲ】 #b可领取 #r150级防具箱 #bx 1\r\n#r【钻石Ⅳ】 #b可领取 #r150级防具箱 #bx 1\r\n#r【钻石Ⅴ】 #b可领取 #r顶级卷轴随机箱 #bx 10\r\n#r【白金Ⅰ】 #b可领取 #r#t5062024# #bx 100\r\n#r【白金Ⅱ】 #b可领取 #r#t5062500# #bx 100\r\n#r【白金Ⅲ】 #b可领取 #r#t5062010# #bx 100\r\n#r【白金Ⅳ】 #b可领取 #r#t5062009# #bx 100\r\n#r【白金Ⅴ】 #b可领取 #r#t2430682# #bx 5\r\n#r【黄金Ⅰ】 #b可领取 #r#t5062024# #bx 50\r\n#r【黄金Ⅱ】 #b可领取 #r#t5062500# #bx 50\r\n#r【黄金Ⅲ】 #b可领取 #r#t5062010# #bx 50\r\n#r【黄金Ⅳ】 #b可领取 #r#t5062009# #bx 50\r\n#r【黄金Ⅴ】 #b可领取 #r#t2049124# #bx 10\r\n#r【白银Ⅰ】 #b可领取 #r#t5062024# #bx 30\r\n#r【白银Ⅱ】 #b可领取 #r#t5062500# #bx 30\r\n#r【白银Ⅲ】 #b可领取 #r#t5062010# #bx 30\r\n#r【白银Ⅳ】 #b可领取 #r#t5062009# #bx 30\r\n#r【白银Ⅴ】 #b可领取 #r#t2049124# #bx 5\r\n#r【青铜Ⅰ】 #b可领取 #r#t5062024# #bx 20\r\n#r【青铜Ⅱ】 #b可领取 #r#t5062500# #bx 10\r\n#r【青铜Ⅲ】 #b可领取 #r#t5062010# #bx 10\r\n#r【青铜Ⅳ】 #b可领取 #r#t5062009# #bx 10\r\n#r【青铜Ⅴ】 #b可领取 #r#t5062002# #bx 10\r\n");
			cm.dispose();
		} else if (selection == 2) {
			cm.dispose();
			cm.warp(startmap);
		} else if (selection == 20) {
			cm.sendOk(" #e#d副本介绍：#n#k\r\n#b进入副本以后先推到水晶.然后清理召唤出来的小兵,打完小兵就能看次元黑化狮子王。每通关一次副本可以获得#r50点#b段位点数,每到达一个新的段位都可以领取奖励!\r\n每日击败他1次即可领取以下物品：\r\n#v2614002#x3 #v5062000#x6 #v5062002#x6  \r\n每日击败他5次即可领取以下物品：\r\n#v5062010#x10 #v5062500#x10 #v2614057#x3 \r\n#r点券x5000 抵用券x5000");
			cm.dispose();
		} else {
			var p = new Points();
			var points = p.getEventPoints(pointsId, cm.getPlayer().getId()); //目前積分
			var Ranking = RankingReward(points)[1]; //得到獎勵id
			var MissonId = pointsId + RankingReward(points)[0]; //得到任務id
			var qty = RankingReward(points)[2]; //得到數量
			switch (Ranking) {
			case 0:
				cm.sendOk("对不起，目前没有该段位可以领取。");
				cm.dispose();
				break;
			default:
				if (p.getEventPoints(MissonId, cm.getPlayer().getId()) >= 1) {
					cm.sendOk("每人每个段位只能领取一次、");
					cm.dispose();
					return;
				}
				p.setEventPoints(MissonId, cm.getPlayer().getId(), 1);
				cm.gainItem(Ranking, qty);
				cm.sendOk("恭喜你获得了该段位的奖励。\r\n#i" + Ranking + "# #t" + Ranking + "# x " + qty + "");
				cm.dispose();
				return;
				break;
			}

		}
	} else if (status == 2) {
		if (!cm.getPlayer().getClient().getChannel() == channel) {
			cm.sendOk("当前副本只能在" + channel + "频道进行。");
			cm.dispose();
			return;
		}
		if (cm.getParty() == null) { //判断组队
			cm.sendOk("你没有创建组队,无法入场。");
			cm.dispose();
		} else if (!cm.isLeader()) { // 判断组队队长
			cm.sendOk("请你们团队的队长和我对话。");
			cm.dispose();
		} else {
			var party = cm.getParty().getMembers();
			var mapId = cm.getMapId();
			var next = true;
			var levelValid = 0;
			var inMap = 0;
			var it = party.iterator();
			var idx = Array();
			while (it.hasNext()) {
				var cPlayer = it.next();
				if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
					levelValid += 1;
				} else {
					next = false;
				}
				if (cPlayer.getMapId() == mapId) {
					inMap += 1;
				}
				idx.push(cPlayer.getId());
			}
			if (cm.party_CheckFailed_PlayerLog(PQ,maxenter)) {
				cm.sendOk("队伍中有玩家已经参与过该副本" + maxenter + "次，无法再进入，请踢出该玩家。");
				cm.dispose();
				return;
			}
			if (next) {
				var em = cm.getEventManager(eventname);
				if (em == null || open == false) {
					cm.askMenu("配置文件不存在,请联系管理员。");
				} else {
					var prop = em.getProperty("state");
					if (prop == null || prop.equals("0")) {
						cm.addPlayerLog(PQ);
						em.startInstance(cm.getParty(), cm.getMap(), "+ moblevel +");
                        // cm.warpParty(940021000,0);
					} else {
						cm.askMenu("已经有队伍在进行了,请换其他频道尝试。");
					}
					cm.dispose();
				}
			} else {
				cm.sendOk("组队成员 " + minPlayers + " 人以上 " + maxPlayers + "人 以下 所有成员等级 " + minLevel + " 以上 " + maxLevel + " 以下才可以入场。");
				cm.dispose();
			}
		}
	}
}

function RankingName(points) {
	if (points >= 0 && points <= 10) {
		return "战斗力5的渣渣";
	}
	if (points >= 11 && points <= 30) {
		return "青铜Ⅴ";
	}
	if (points >= 31 && points <= 50) {
		return "青铜Ⅳ";
	}
	if (points >= 51 && points <= 80) {
		return "青铜Ⅲ";
	}
	if (points >= 81 && points <= 100) {
		return "青铜Ⅱ";
	}
	if (points >= 101 && points <= 120) {
		return "青铜Ⅰ";
	}
	if (points >= 121 && points <= 140) {
		return "白银Ⅴ";
	}
	if (points >= 141 && points <= 160) {
		return "白银Ⅳ";
	}
	if (points >= 161 && points <= 180) {
		return "白银Ⅲ";
	}
	if (points >= 181 && points <= 200) {
		return "白银Ⅱ";
	}
	if (points >= 201 && points <= 230) {
		return "白银Ⅰ";
	}
	if (points >= 231 && points <= 260) {
		return "黄金Ⅴ";
	}
	if (points >= 261 && points <= 290) {
		return "黄金Ⅳ";
	}
	if (points >= 291 && points <= 320) {
		return "黄金Ⅲ";
	}
	if (points >= 321 && points <= 350) {
		return "黄金Ⅱ";
	}
	if (points >= 351 && points <= 400) {
		return "黄金Ⅰ";
	}
	if (points >= 401 && points <= 450) {
		return "白金Ⅴ";
	}
	if (points >= 451 && points <= 500) {
		return "白金Ⅳ";
	}
	if (points >= 501 && points <= 550) {
		return "白金Ⅲ";
	}
	if (points >= 551 && points <= 600) {
		return "白金Ⅱ";
	}
	if (points >= 601 && points <= 650) {
		return "白金Ⅰ";
	}
	if (points >= 651 && points <= 700) {
		return "钻石Ⅴ";
	}
	if (points >= 701 && points <= 800) {
		return "钻石Ⅳ";
	}
	if (points >= 801 && points <= 900) {
		return "钻石Ⅲ";
	}
	if (points >= 901 && points <= 1000) {
		return "钻石Ⅱ";
	}
	if (points >= 1001 && points <= 1100) {
		return "钻石Ⅰ";
	}
	if (points >= 1101 && points <= 1499) {
		return "超凡大师";
	}
	if (points >= 1500) {
		return "最強王者荣耀";
	}
}

function RankingReward(points) {
	if (points >= 0 && points <= 10) {
		return Array(0, 0, 0);
	}
	if (points >= 11 && points <= 30) {
		return Array(1, 5062002, 10);
	}
	if (points >= 31 && points <= 50) {
		return Array(2, 5062009, 10);
	}
	if (points >= 51 && points <= 80) {
		return Array(3, 5062010, 10);
	}
	if (points >= 81 && points <= 100) {
		return Array(4, 5062500, 10);
	}
	if (points >= 101 && points <= 120) {
		return Array(5, 5062024, 20);
	}
	if (points >= 121 && points <= 140) {
		return Array(6, 2049124, 5);
	}
	if (points >= 141 && points <= 160) {
		return Array(7, 5062009, 30);
	}
	if (points >= 161 && points <= 180) {
		return Array(8, 5062010, 30);
	}
	if (points >= 181 && points <= 200) {
		return Array(9, 5062500, 30);
	}
	if (points >= 201 && points <= 230) {
		return Array(10, 5062024, 30);
	}
	if (points >= 231 && points <= 260) {
		return Array(11, 2049124, 10);
	}
	if (points >= 261 && points <= 290) {
		return Array(12, 5062009, 50);
	}
	if (points >= 291 && points <= 320) {
		return Array(13, 5062010, 50);
	}
	if (points >= 321 && points <= 350) {
		return Array(14, 5062500, 50);
	}
	if (points >= 351 && points <= 400) {
		return Array(15, 5062024, 50);
	}
	if (points >= 401 && points <= 450) {
		return Array(16, 2430682, 5);
	}
	if (points >= 451 && points <= 500) {
		return Array(17, 5062009, 100);
	}
	if (points >= 501 && points <= 550) {
		return Array(18, 5062010, 100);
	}
	if (points >= 551 && points <= 600) {
		return Array(19, 5062500, 100);
	}
	if (points >= 601 && points <= 650) {
		return Array(20, 5062024, 100);
	}
	if (points >= 651 && points <= 700) {
		return Array(21, 4000000, 100); //找不到
	}
	if (points >= 701 && points <= 800) {
		return Array(22, 4000000, 100); //找不到
	}
	if (points >= 801 && points <= 900) {
		return Array(23, 4000000, 100); //找不到
	}
	if (points >= 901 && points <= 1000) {
		return Array(24, 4000000, 100); //找不到
	}
	if (points >= 1001 && points <= 1100) {
		return Array(25, 1032219, 1);
	}
	if (points >= 1101 && points <= 1499) {
		return Array(26, 2431412, 1);
	}
	if (points >= 1500) {
		return Array(27, 1142742, 1);
	}
}

var Points = function () {
	this.DelEventPoints = function (Eventid, charid) {
		cm.getPlayerLog(Eventid+charid,0)
	}

	this.DelEventPoints = function (Eventid, charid) {
		cm.getPlayerLog(Eventid+charid,0)
	}

	this.getEventTimes = function (Eventid, charid) { //通过eventid来得到参与这个活动的次数

		return parseInt(cm.getPlayerLog(Eventid+charid,0));
	}

	this.getEventPoints = function (Eventid, charid) { //通过eventid来得到参与这个活动的点数

		return parseInt(cm.getPlayerLog(Eventid,0));
	}

	this.setEventPoints = function (Eventid, charid, points) { //通过eventid来给予参与这个活动的点数

		cm.setPlayerLog(Eventid,0,parseInt(cm.getPlayerLog(Eventid,1))+points);
	}

	this.setEventTimes = function (Eventid, charid, times) { //通过eventid来设置参与这个活动的次数
		cm.addPlayerLog(Eventid+charid,0);
	}
}

function state(pro) {
	switch (pro) {
	case "2":
	case "5":
	case "8":
	case "11":
		return 0;
		break;
	case "3":
	case "6":
	case "9":
	case "12":
		return 0;
		break;
	case "4":
		return 1; //證明過了一個關卡了
	case "7":
		return 2; //證明過了一個關卡了
	case "10":
		return 3; //證明過了一個關卡了
		break;
	case "13": //任務完成部分
		return 999;
		break;
	}
}

function Ranking1() {
	var Text = "排名如下：(1~10名次)\r\n\r\n#d"
		var RankDataBase = cm.getConnection().prepareStatement("SELECT * FROM eventtimes where eventid = " + pointsId + " ORDER BY points DESC LIMIT 10").executeQuery();
	var i = 1;
	while (RankDataBase.next()) {
		Text += "#fUI/UIToolTip.img/Item/Equip/Star/Star# 名次:" + i + "\r\n角色名:" + RankDataBase.getString("cName") + "\r\n段位:" + RankingName(RankDataBase.getInt("points")) + "\r\n"
		Text += "~~~~~~~~~~~~~~~~~~~\r\n"
		i++;
	}
	cm.sendOk(Text);
}

