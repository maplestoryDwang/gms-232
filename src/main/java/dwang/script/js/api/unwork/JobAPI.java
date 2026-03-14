package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.enums.Stat;

import java.util.HashMap;
import java.util.Map;

public interface JobAPI extends DwangScriptBaseApi {

    /**
         * 换职业
         *
         * @param job 职业ID
         * @出自类 JobAPI
         */
    default void changeJob(short jobID) {
        setJob(jobID);
        addAP(5); //Standard added AP upon Job Advancing
        addSP(5); //Standard added SP upon Job Advancing
    }


    default void setJob(short jobID) {
        getChr().setJob(jobID);
        Map<Stat, Object> stats = new HashMap<>();
        stats.put(Stat.job, jobID);
        getChr().write(WvsContext.statChanged(stats, getChr().getSubJob()));
    }
    default void addAP(int amount) {
        int currentAP = getChr().getAvatarData().getCharacterStat().getAp();
        setAP(currentAP + amount);
    }

    default void setAP(int amount) {
        getChr().setStat(Stat.ap, (short) amount);
        Map<Stat, Object> stats = new HashMap<>();
        stats.put(Stat.ap, (short) amount);
        getChr().write(WvsContext.statChanged(stats));
    }

    default void addSP(int amount) {
        addSP(amount, false);
    }
    default void addSP(int amount, boolean jobAdv) {
        byte jobLevel = (byte) JobConstants.getJobLevel(getChr().getJob());
        int currentSP = getChr().getAvatarData().getCharacterStat().getExtendSP().getSpByJobLevel(jobLevel);
        setSP(currentSP + amount);
        if (jobAdv) {
            getChr().write(WvsContext.message(MessagePacket.incSpMessage(getChr().getJob(), (byte) amount)));
        }
    }


    default void setSP(int amount) {
        getChr().setSpToCurrentJob(amount);
        Map<Stat, Object> stats = new HashMap<>();
        stats.put(Stat.sp, getChr().getAvatarData().getCharacterStat().getExtendSP());
        getChr().write(WvsContext.statChanged(stats));
    }


    /**
         * @出自类 JobAPI
    */
    default void getBeginner() { }



    /**
         * 获得玩家当前职业ID
         * @出自类 JobAPI
         */
    default void getJob() { }



    /**
         * 获得玩家当前职业名称
         * @出自类 JobAPI
         */
    default void getJobName() { }



    /**
         * 查看指定职业的名称
         *
         * @param jobId 职业ID
         * @出自类 JobAPI
         */
    default void getJobName(int jobId) { }



    /**
         * @出自类 JobAPI
    */
    default void getMasteryBooksByJob(String job) { }



    /**
         * @出自类 JobAPI
    */
    default void is3转() { }



    /**
         * @出自类 JobAPI
    */
    default void isBeginnerJob() { }



    /**
         * 神之子切换
         * @出自类 JobAPI
         */
    default void onZeroInfo(int type) { }



    /**
         * 显示神之子武器晋升UI
         * @出自类 JobAPI
         */
    default void openZeroUpgradeUI() { }



    /**
         * @param skill       生活技能ID
         * @param resultLevel 0~3，对应B、C、A、A+
         * @param exp         经验值
         * @param levelup     是否给出升级提示
         * @return
         * @出自类 JobAPI
         */
    default void zeroLearnProfessionSkill(int skill, int resultLevel, int exp, int levelup) { }



    /**
         * 神之子读书列表
         *
         * @param count
         * @出自类 JobAPI
         */
    default void zeroReadBook(int count) { }



    /**
         * 神之子读书结果
         *
         * @param v1
         * @param v2
         * @param v3
         * @param text
         * @param npc
         * @param v4
         * @param s1
         * @param s2
         * @出自类 JobAPI
         */
    default void zeroReadBookResult(int v1, int v2, int v3, String text, int npc, int v4, int s1, int s2) { }



    /**
         * 适用于强化失败后恢复装备
         * @出自类 JobAPI
         */
    default void zeroRestoreWeapon() { }



    /**
         * 检查玩家当前职业是否匹配对应转职数，比如1转、2转……
         * @出自类 JobAPI
         */
    default void 匹配转职数(int 转数) { }



    /**
         * @出自类 JobAPI
    */
    default void 神之子_完成剧情任务() { }



}
