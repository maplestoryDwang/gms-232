/**
-- BMS 任务脚本空白模板 ---------------------------------------------------------------------------
任务 ID： 36265
任务名称： 银色元素师纹章
任务开始NPC ID： 9010010
任务开始NPC 名称： 卡珊德拉
-- 更新日志 ---------------------------------------------------------------------------------------
2022-06-08 13:46:23 创建模板
---------------------------------------------------------------------------------------------------
 **/

// 全局变量
var status = -1;
var selectionLog = [];
function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom('想重新获得#b#t1190560##k的话，就给我580,000金币', 36, 9010010, false, true);
        } else {
            if (status === a++) {
                cm.forceStartQuest(36265, '');
				if(!cm.haveItem(1190560,1)){
					cm.gainItem(1190560,1);
				}
				cm.forceCompleteQuest();
                cm.dispose();
            }
        }
    }
}

// 依次对话时执行。根据已对话的次数，分别会调用 stage0, stage1, .....stageN
function stage0(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		var id = cm.getQuest();
		cm.askYesNo("");
	} else if (status == i++) {
		cm.forceStartQuest();
		cm.dispose();
	}
}

// 任务结束时执行
function end(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		var id = cm.getQuest();
		cm.askYesNo("");
	} else if (status == i++) {
		cm.gainMeso(-580000);
		cm.gainItem(1190560,1);
		cm.forceCompleteQuest();
		cm.dispose();
	}
}
