/**
 * by_pp  解决相关技能学习等bug
 * 使用说明：
 * 1、放服务端目录：脚本/NPC,删除同名.jse文件
 * 2、在市场使用GM命令召唤个永久NPC：!召唤永久NPC 9900000
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = []; // 记录每一轮的选择
var scx = "#fEffect/CharacterEff/1082312/1/0#"; //双彩星
//键盘位置号qwer
var keyMaps = [
	[16, "Q键"],
	[17, "W键"],
	[18, "E键"],
	[19, "R键"]
];
//学习技能列表
var skillslist = [
	[162120020, 10, 10],
	[8, 1, 1]
]

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {

	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		var id = cm.getNpc();
		cm.teachSkill(1004, 1, 0)
		cm.teachSkill(10001004, 1, 0)
		cm.teachSkill(20001004, 1, 0)
		cm.teachSkill(20011004, 1, 0)
		var txt = "哟~年轻人，来找我处理BUG了？看看下面有没有能解决你问题的！\r\n\r\n";
		txt += "#L1002##e#b" + scx + "学习技能（群宠、知己等）#k#l\r\n";
		txt += "#L1003##e#b" + scx + "学习其他技能#k#l\r\n";
		txt += "#L1004##e#b" + scx + "绑定任意职业技能到键盘#k#l\r\n";
		cm.sendNext(txt);
	} else if (status === 1) {
		var txt2 = "请选择：\r\n\r\n";
		switch (selection) {
			case 1002:
				for (var ii in skillslist) {
					txt2 += "#b#L" + ii + "#学习 #s" + skillslist[ii][0] + "# 技能#l\r\n";
				}
				cm.sendNext(txt2);
				break;
			case 1004:
				
				cm.askText_Bottom("你想添加什么技能？支持模糊查询。#fs15#\r\n  #b如：五行回归术、回归、40011227、400");
				break;
			case 1003:
				cm.dispose();
				cm.openNpc(9900000,"学习技能");
				break;
		}

	} else if (status === 2) {
		// cm.playerMessage(selectionLog[0]);
		// cm.playerMessage(selectionLog[1]);
		if (selectionLog[1] == 1002) {
			// cm.playerMessage(skillslist[selectionLog[0]][0]);
			// cm.playerMessage(skillslist[selectionLog[0]][1]);
			cm.teachSkill(skillslist[selectionLog[2]][0], skillslist[selectionLog[2]][1], skillslist[selectionLog[2]][2]);
			cm.sendOk("#s" + skillslist[selectionLog[2]][0] + "#学习成功！");
			cm.dispose();
			return;
		}
		if (selectionLog[1] == 1004) {
			if (cm.getText() == "") {
				cm.playerMessage(-1, "请输入关键字！");
				cm.effect_NormalSpeechBalloon("请输入关键字！", 1, 0, 0, 3000, 0, 0);
				cm.dispose();
				return
			}
			list = cm.searchForText(6, cm.getText());
			if (list == null) {
				cm.getTopMsgFont("搜索不到信息", 3, 20, 4, 0, 0);
				cm.dispose();
				return
			}
			cm.askMenu_Bottom(cm.searchForText(6, cm.getText()).replaceAll("s", "t"))
		}
		// cm.dispose();
	} else if (status === 3) {
		if (selection == -1) {
			cm.getTopMsgFont("搜索不到信息", 3, 20, 4, 0, 0);
			cm.dispose();
			return
		}
		selectionLog[2] = selection
		var maptxt = "请选择将[" + cm.getSkillName(selectionLog[2]) + "]绑定到哪个键盘按键：\r\n\r\n";
		for (var keyid in keyMaps) {
			maptxt += "#L" + keyMaps[keyid][0] + "#" + keyMaps[keyid][1] + "\r\n";
		}
		cm.askMenu_Bottom(maptxt);
	} else if (status === 4) {
		var restxt = "绑定成功，“换频道后”生效，使用GM命令也行《!cc 2》数字代表2线，快去试试吧！";
		cm.teachSkill(selectionLog[2], 30);
		keybinding(selectionLog[2], selection);
		cm.getPlayer().getKeyLayout().load();
		cm.getPlayer().getStorage().saveToDB()
		cm.sendOkSNoESC_Bottom(restxt);
		cm.getTopMsgFont(restxt);
		cm.dispose();
	} else {
		cm.dispose();
	}
}

function keybinding(skillid, keymapid) {
	cm.updateSQL("delete from  keymap where `key`=? and `characterid`=?", [keymapid, cm.getPlayer().getId()]); // de数据
	cm.updateSQL("INSERT INTO keymap ( `characterid`, `key`, `type`, `action`) VALUES ( ?,?, '1', ?)", [cm.getPlayer().getId(), keymapid, skillid]); // up数据
}