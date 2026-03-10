package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface EventAPI extends DwangScriptBaseApi {

    /**
         * 增加账号日志的次数记录，默认+1，会每日清空
         *
         * @param name 日志名称
         * @出自类 EventAPI
         */
    default void addAccountLog(String name) { }



    /**
         * 增加账号日志的次数记录，默认+1
         *
         * @param name 日志名称
         * @param type 0=永久 other=记录保存时间
         * @出自类 EventAPI
         */
    default void addAccountLog(String name, int type) { }



    /**
         * 增加账号日志的次数记录
         *
         * @param name  日志名称
         * @param type  0=永久 other=记录保存时间
         * @param count 次数
         * @出自类 EventAPI
         */
    default void addAccountLog(String name, int type, int count) { }



    /**
         * 增加玩家日志的次数记录，默认+1，会每日清空
         *
         * @param name 日志名称
         * @出自类 EventAPI
         */
    default void addPlayerLog(String name) { }



    /**
         * 增加玩家日志的次数记录，默认+1
         *
         * @param name 日志名称
         * @param type 0=永久 other=记录保存时间
         * @出自类 EventAPI
         */
    default void addPlayerLog(String name, int type) { }



    /**
         * 增加玩家日志的次数记录
         *
         * @param name  日志名称
         * @param type  0=永久 other=记录保存时间
         * @param count 次数
         * @出自类 EventAPI
         */
    default void addPlayerLog(String name, int type, int count) { }



    /**
         * 强制加入指定事件，不经过任何检查
         * @出自类 EventAPI
         */
    default void forceJoinEvent(String name) { }



    /**
         * 查询账号日志的记录次数，每日清空
         *
         * @param name 日志名称
         * @出自类 EventAPI
         */
    default void getAccountLog(String name) { }



    /**
         * 查询账号日志的记录次数
         *
         * @param name 日志名称
         * @param type 0=永久 other=记录保存时间
         * @出自类 EventAPI
         */
    default void getAccountLog(String name, int type) { }



    /**
         * 获取活动事件（过时）
         * @出自类 EventAPI
         */
    default void getEvent(String loc) { }



    /**
         * 获得玩家当前所在事件的EventManager
         * @出自类 EventAPI
         */
    default void getEventInstance() { }



    /**
         * 获得指定事件的EventManager
         *
         * @param event
         * @return
         * @出自类 EventAPI
         */
    default void getEventManager(String event) { }



    /**
         * 查询玩家日志的记录次数，会每日清空，一般用于BOSS战斗次数限制
         *
         * @param name 日志名称
         * @出自类 EventAPI
         */
    default void getPlayerLog(String name) { }



    /**
         * 查询玩家日志的记录次数，一般用于BOSS战斗次数限制
         *
         * @param name 日志名称
         * @param type 0=永久 other=记录保存时间
         * @出自类 EventAPI
         */
    default void getPlayerLog(String name, int type) { }



    /**
         * 增加团队所有成员的日志次数记录，每日清空
         *
         * @param name  日志名称
         * @param count 次数
         * @出自类 EventAPI
         */
    default void party_addAccountLog(String name, int count) { }



    /**
         * 增加团队所有成员的日志次数记录
         *
         * @param name  日志名称
         * @param count 次数
         * @param type  0=永久 other=记录保存时间
         * @出自类 EventAPI
         */
    default void party_addAccountLog(String name, int count, int type) { }



    /**
         * 增加团队所有成员的日志次数记录，每日清空
         *
         * @param name  日志名称
         * @param count 次数
         * @出自类 EventAPI
         */
    default void party_addPlayerLog(String name, int count) { }



    /**
         * 增加团队所有成员的日志次数记录
         *
         * @param name  日志名称
         * @param count 次数
         * @param type  0=永久 other=记录保存时间
         * @出自类 EventAPI
         */
    default void party_addPlayerLog(String name, int count, int type) { }



    /**
         * 检查是否有团队成员超过了指定账号日志[AccountLog]的次数上限
         *
         * @param name  日志名称，并且选择每日清空类型
         * @param times 次数上限
         * @return 不满足要求的队友的名称列表
         * @出自类 EventAPI
         */
    default void party_CheckFailed_AccountLog(String name, int times) { }



    /**
         * 检查是否有团队成员超过了指定账号日志[AccountLog]的次数上限
         *
         * @param name  日志名称，并且选择每日清空类型
         * @param times 次数上限
         * @param type  日志类型，0=永久 other=记录保存时间
         * @return 不满足要求的队友的名称列表
         * @出自类 EventAPI
         */
    default void party_CheckFailed_AccountLog(String name, int times, int type) { }



    /**
         * 检查是否有团队成员超过了指定玩家日志[PlayerLog]的次数上限
         *
         * @param name  日志名称，并且选择每日清空类型
         * @param times 次数上限
         * @return 不满足要求的队友的名称列表
         * @出自类 EventAPI
         */
    default void party_CheckFailed_PlayerLog(String name, int times) { }



    /**
         * 检查是否有团队成员超过了指定玩家日志[PlayerLog]的次数上限
         *
         * @param name  日志名称，并且选择每日清空类型
         * @param times 次数上限
         * @param type  日志类型，0=永久 other=记录保存时间
         * @return 不满足要求的队友的名称列表
         * @出自类 EventAPI
         */
    default void party_CheckFailed_PlayerLog(String name, int times, int type) { }



    /**
         * 清空账号日志的次数记录，类型为 每日清空
         *
         * @param name 日志名称
         * @出自类 EventAPI
         */
    default void resetAccountLog(String name) { }



    /**
         * 清空账号日志的次数记录
         *
         * @param name 日志名称
         * @param type 0=永久 other=记录保存时间
         * @出自类 EventAPI
         */
    default void resetAccountLog(String name, int type) { }



    /**
         * 清空玩家日志的次数记录
         *
         * @param name 日志名称
         * @param type 0=永久 other=记录保存时间
         * @出自类 EventAPI
         */
    default void resetPlayerLog(String name, int type) { }



    /**
         * 设置账号日志的次数记录
         *
         * @param name  日志名称
         * @param type  0=永久 other=记录保存时间
         * @param count 次数
         * @出自类 EventAPI
         */
    default void setAccountLog(String name, int type, int count) { }



    /**
         * 设置玩家日志的次数记录
         *
         * @param name  日志名称
         * @param type  0=永久 other=记录保存时间
         * @param count 次数
         * @出自类 EventAPI
         */
    default void setPlayerLog(String name, int type, int count) { }



}
