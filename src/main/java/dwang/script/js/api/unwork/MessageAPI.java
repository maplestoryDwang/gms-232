package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface MessageAPI extends DwangScriptBaseApi {

    /**
         * 右下角弹窗通知，可以任意调用，自动淡入淡出
         *
         * @param id   NPCID,0=玩家
         * @param time 持续时间，单位毫秒
         * @param text 说话内容
         * @出自类 MessageAPI
         */
    default void addPopupSay(int id, int time, String text) { }



    /**
         * @出自类 MessageAPI
    */
    default void addPopupSay(int id, int time, String text, String text2) { }



    /**
         * @出自类 MessageAPI
    */
    default void addPopupSay(int id, int time, String text, String text2, int v2) { }



    /**
         * 浮在玩家头上的文本，浅灰色背景
         *
         * @param msg    说话内容
         * @param width  固定宽度
         * @param height 固定高度
         * @出自类 MessageAPI
         */
    default void balloonMsg(String msg, int width, int height) { }



    /**
         * @出自类 MessageAPI
    */
    default void broadcastServerMsg(int type, String msg, int weather) { }



    /**
         * @出自类 MessageAPI
    */
    default void channelMessage(int type, String message) { }



    /**
         * @出自类 MessageAPI
    */
    default void getTopMsgFont(String msg, int nFont, int nFontSizeType, int nFontColorType, int nFadeOutDelay) { }



    /**
         * 顶部信息-自定义字型 0=白色 1=黑色 2=灰黄 3=灰色 4=黄色 5=蓝色 6=青色 7=红色 8=绿色 9=粉色 10=橘色 11=玫红
         * 12=灰蓝 13=梅红 14=墨绿 15=淡紫 16=亮青 17=灰色 18= 20=亮绿
         *
         * @param msg
         * @param nFont//字体           3、4、5是黑体 其他宋体
         * @param nFontSizeType//字体大小 25
         * @param nFontColorType//    字体颜色
         * @param nFadeOutDelay//     淡出延迟
         * @出自类 MessageAPI
         */
    default void getTopMsgFont(String msg, int nFont, int nFontSizeType, int nFontColorType, int nFadeOutDelay, int b1) { }



    /**
         * 中间公告-天气效果
         *
         * @param msg     内容
         * @param type    类型
         * @param time    持续时间
         * @param bForced
         * @出自类 MessageAPI
         */
    default void getWeatherEffectNotice(String msg, int type, int time, int bForced) { }



    /**
         * 给玩家所在公会发消息
         *
         * @param message
         * @出自类 MessageAPI
         */
    default void guildMessage(String message) { }



    /**
         * 给玩家所在公会发消息
         *
         * @param type    消息类型
         * @param message
         * @see #playerMessage(int, String)
         * @出自类 MessageAPI
         */
    default void guildMessage(int type, String message) { }



    /**
         * 在玩家当前地图发送全地图信息
         *
         * @param message 信息
         * @出自类 MessageAPI
         */
    default void mapMessage(String message) { }



    /**
         * 在玩家当前地图发送全地图信息
         *
         * @param type    类型
         * @param message 信息
         * @see #playerMessage(int, String)
         * @出自类 MessageAPI
         */
    default void mapMessage(int type, String message) { }



    /**
         * @出自类 MessageAPI
    */
    default void midMsg(int index, String msg, int keep) { }



    /**
         * 给玩家团队里所有成员发送通知
         *
         * @param type 通知类型：
         * 
    
         *             -1 = 红色正中提示，过几秒会淡出消失
         * 
    
         *             1 = 弹窗提示，需要点击确认才能取消
         * 
    
         *             2 = 蓝底系统提示，出现在聊天框
         * 
    
         *             3 = (null)红底系统提示，出现在聊天框
         * 
    
         *             5 = 红色系统提示，出现在聊天框
         * 
    
         *             6 = 蓝色系统提示，出现在聊天框
         * 
    
         *             -6 = 灰色系统提示，出现在聊天框
         * 
    
         *             -7 = 黄色系统提示，出现在聊天框
         * 
    
         * @出自类 MessageAPI
         */
    default void partyMessage(int type, String msg) { }



    /**
         * 给玩家发送通知
         *
         * @param message 消息
         * @see #playerMessage(int type, String message)
         * @出自类 MessageAPI
         */
    default void playerMessage(String message) { }



    /**
         * 给玩家发送通知
         *
         * @param type    通知类型：
         * 
    
         *                -1 = 红色正中提示，过几秒会淡出消失
         * 
    
         *                1 = 弹窗提示，需要点击确认才能取消
         * 
    
         *                2 = 蓝底系统提示，出现在聊天框
         * 
    
         *                3 = (null)红底系统提示，出现在聊天框
         * 
    
         *                5 = 红色系统提示，出现在聊天框
         * 
    
         *                6 = 蓝色系统提示，出现在聊天框
         * 
    
         *                -6 = 灰色系统提示，出现在聊天框
         * 
    
         *                -7 = 黄色系统提示，出现在聊天框
         * 
    
         * @param message 消息
         * @出自类 MessageAPI
         */
    default void playerMessage(int type, String message) { }



    /**
         * @出自类 MessageAPI
    */
    default void spouseMessage(int op, String msg) { }



    /**
         * 播放系统信息
         *
         * @param msg 信息
         * @出自类 MessageAPI
         */
    default void systemMessage(String msg) { }



    /**
         * @出自类 MessageAPI
    */
    default void topMsg(String message) { }



    /**
         * @出自类 MessageAPI
    */
    default void topMsgByItem(int itemId, String message) { }



    /**
         * @出自类 MessageAPI
    */
    default void topMsgBySoul(String message) { }



    /**
         * 播放世界消息
         *
         * @param message 消息
         * @出自类 MessageAPI
         */
    default void worldMessage(String message) { }



    /**
         * 播放世界消息
         *
         * @param type    类型
         * @param message 消息
         * @see #playerMessage(int, String)
         * @出自类 MessageAPI
         */
    default void worldMessage(int type, String message) { }



    /**
         * 播放世界消息，显示道具信息
         *
         * @param title   类型
         * @param message 消息
         * @param item    道具
         * @出自类 MessageAPI
         */
    default void worldMessageItem(String title, String message, Object item) { }



    /**
         * 播放世界消息，黄色风格
         *
         * @param msg 消息
         * @出自类 MessageAPI
         */
    default void worldMessageYellow(String msg) { }



    /**
         * @出自类 MessageAPI
    */
    default void worldSpouseMessage(int type, String message) { }



}
