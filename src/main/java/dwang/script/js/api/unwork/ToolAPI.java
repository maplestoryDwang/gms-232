package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.world.field.Field;

public interface ToolAPI extends DwangScriptBaseApi {

    /**
         * @出自类 ToolAPI
    */
    default void checkDrop(int mobId) { }



    /**
         * 简易的桩接口，用来阻塞脚本运行在低版本端上
         * @出自类 ToolAPI
         */
    default void checkURDVNMOOKGD() { }



    /**
         * @出自类 ToolAPI
    */
    default void deleteCharacter(int cid) { }



    /**
         * 在玩家当前位置掉落物体
         * @出自类 ToolAPI
         */
    default void dropSingleItem(int itemId) { }



    /**
         * @出自类 ToolAPI
    */
    default void enableActions() { }



    /**
         * @出自类 ToolAPI
    */
    default void enableActionsLight() { }



    /**
         * 格式化输出字符串
         *
         * @param format   格式
         * @param toFormat 参数
         * @return 字符串
         * @出自类 ToolAPI
         */
    default void format(String format, Object toFormat) { }



    /**
         * 按逗号分隔数值
         *
         * @param num 支持 Long
         * @return "1,234"
         * @出自类 ToolAPI
         */
    default void formatNumberWithComma(int num) { }



    /**
         * 一键生成道具脚本
         * @出自类 ToolAPI
         */
    default void genItemScript(int start, int end) { }



    /**
         * 一键生成地图脚本
         * @出自类 ToolAPI
         */
    default void genMapScript(int start, int end) { }



    /**
         * @出自类 ToolAPI
    */
    default void genPortalScript(Field map) { }



    /**
         * 一键生成任务脚本
         * @出自类 ToolAPI
         */
    default void genQuestScript(int start, int end) { }



    /**
         * 获得当前频道所有玩家
         *
         * @return 所有玩家
         * @出自类 ToolAPI
         */
    default void getAllCharacters() { }



    /**
         * @出自类 ToolAPI
    */
    default void getChannelNumber() { }



    /**
         * @出自类 ToolAPI
    */
    default void getChannelServer() { }



    /**
         * @出自类 ToolAPI
    */
    default void getCharacterList() { }



    /**
         * @出自类 ToolAPI
    */
    default void getCharacterName(int characterid) { }



    /**
         * @出自类 ToolAPI
    */
    default void getConstantScriptContent(String name) { }



    /**
         * 获得当前系统时间
         *
         * @return
         * @出自类 ToolAPI
         */
    default void getCurrentTime() { }



    /**
         * @出自类 ToolAPI
    */
    default void getLeftPadded(String param_in, Object padchar, int length) { }



    /**
         * 任务常用的日期格式，如：
         * 
    
         * yyyyMMdd
         * 
    
         * yyyyMM
         * 
    
         * yy/MM/dd
         * 
    
         * yyyy-MM-dd HH:mm:ss
         * 
    
         * yyyy年MM月dd日 HH时mm分ss秒
         * 
    
         * yyyyMMddHHmmss
         * 
    
         * yyMMddHHmmss
         * 
    
         * HH:mm:ss
         * 
    
         * @出自类 ToolAPI
         */
    default void getNowTimeString(String format) { }



    /**
         * @出自类 ToolAPI
    */
    default void getReadableMillis(int startMillis, int endMillis) { }



    /**
         * 获取服务端配置的服务器名称
         *
         * @return
         * @出自类 ToolAPI
         */
    default void getServerName() { }



    /**
         * 查看修复日志
         * @出自类 ToolAPI
         */
    default void getUpdateLog() { }



    /**
         * 0=普通版99 1=黄金版199 2=至尊版VIP499
         *
         * @return
         * @出自类 ToolAPI
         */
    default void getzhizunvip() { }



    /**
         * 纯粹测试接口
         * @出自类 ToolAPI
         */
    default void get服务器启动时间() { }



    /**
         * @param opcodes 包头值
         * @param Text    包内容
         * @出自类 ToolAPI
         */
    default void mplewPacket(String opcodes, String Text) { }



    /**
         * 让传送点和反应堆直接引用对话脚本
         * @出自类 ToolAPI
         */
    default void openScriptNpc() { }



    /**
         * @出自类 ToolAPI
    */
    default void rand(Object nums) { }



    /**
         * @出自类 ToolAPI
    */
    default void rand(int min, int max) { }



    /**
         * 从指定数值里随机抽取N个值
         *
         * @param arr   long[]
         * @param amout 目标数量，小于入参则不会重复，否则会重复
         * @return long[]
         * @出自类 ToolAPI
         */
    default void randArray(Object arr, int amout) { }



    /**
         * 从指定范围的数值里随机抽取N个值
         *
         * @param min   long
         * @param max   long
         * @param amout 目标数量，小于入参则不会重复，否则会重复
         * @return long[]
         * @出自类 ToolAPI
         */
    default void randArray(int min, int max, int amout) { }



    /**
         * @出自类 ToolAPI
    */
    default void randInt(int arg0) { }



    /**
         * 纯粹测试接口
         * @出自类 ToolAPI
         */
    default void test() { }



    /**
         * 在控制台输出文本
         *
         * @param test 文本
         * @出自类 ToolAPI
         */
    default void test(String test) { }



}
