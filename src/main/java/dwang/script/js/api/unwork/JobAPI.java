package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.client.character.Char;
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
         * @param jobID 职业ID
         * @出自类 JobAPI
         */
    default void changeJob(short jobID) {
        Char chr = getChr();
        short job = chr.getJob();
        // 当前是新手重新设置属性
        if (JobConstants.isBeginnerJob(job)) {
            setSTR((short) 4);
            setINT((short) 4);
            setDEX((short) 4);
            setLUK((short) 4);
            setAP(4 + chr.getLevel() * 5);
        }

        setJob(jobID);
        addAP(5); //Standard added AP upon Job Advancing
        addSP(5); //Standard added SP upon Job Advancing
    }

    default void setSTR(short amount) {
        getChr().setStat(Stat.str, amount);
        Map<Stat, Object> stats = new HashMap<>();
        stats.put(Stat.str, amount);
        getChr().write(WvsContext.statChanged(stats));
    }


    default void setINT(short amount) {
        getChr().setStat(Stat.inte, amount);
        Map<Stat, Object> stats = new HashMap<>();
        stats.put(Stat.inte, amount);
        getChr().write(WvsContext.statChanged(stats));
    }


    default void setDEX(short amount) {
        getChr().setStat(Stat.dex, amount);
        Map<Stat, Object> stats = new HashMap<>();
        stats.put(Stat.dex, amount);
        getChr().write(WvsContext.statChanged(stats));
    }


    default void setLUK(short amount) {
        getChr().setStat(Stat.luk, amount);
        Map<Stat, Object> stats = new HashMap<>();
        stats.put(Stat.luk, amount);
        getChr().write(WvsContext.statChanged(stats));
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
    default void getBeginner() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获得玩家当前职业ID
         * @出自类 JobAPI
         */
    default short getJob() {
        return getChr().getJob();

    }



    /**
         * 获得玩家当前职业名称
         * @出自类 JobAPI
         */
    default void getJobName() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 查看指定职业的名称
         *
         * @param jobId 职业ID
         * @出自类 JobAPI
         */
    default void getJobName(int jobId) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 JobAPI
    */
    default void getMasteryBooksByJob(String job) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 JobAPI
    */
    default void is3转() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 JobAPI
    */
    default void isBeginnerJob() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 神之子切换
         * @出自类 JobAPI
         */
    default void onZeroInfo(int type) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 显示神之子武器晋升UI
         * @出自类 JobAPI
         */
    default void openZeroUpgradeUI() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @param skill       生活技能ID
         * @param resultLevel 0~3，对应B、C、A、A+
         * @param exp         经验值
         * @param levelup     是否给出升级提示
         * @return
         * @出自类 JobAPI
         */
    default void zeroLearnProfessionSkill(int skill, int resultLevel, int exp, int levelup) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 神之子读书列表
         *
         * @param count
         * @出自类 JobAPI
         */
    default void zeroReadBook(int count) {
        throw new RuntimeException("not implemented");
    }



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
    default void zeroReadBookResult(int v1, int v2, int v3, String text, int npc, int v4, int s1, int s2) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 适用于强化失败后恢复装备
         * @出自类 JobAPI
         */
    default void zeroRestoreWeapon() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 检查玩家当前职业是否匹配对应转职数，比如1转、2转……
         * @出自类 JobAPI
         */
    default void 匹配转职数(int 转数) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 JobAPI
    */
    default void 神之子_完成剧情任务() {
        throw new RuntimeException("not implemented");
    }



}
