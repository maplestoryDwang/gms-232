package dwang.script.js.api.unwork;
import dwang.script.DwangScriptBaseApi;

public interface 成就系统API extends DwangScriptBaseApi {

    /**
         * @出自类 成就系统API
    */
    default void finishAchievement(int achievementId) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 成就系统API
    */
    default void gainSubAchievement(int achievementId, int sub) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 成就系统API
    */
    default void updateAchievement(int achievementId, int sub, int cur, int goal) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 成就系统API
    */
    default void 成就检查_火热的兄弟情() {
        throw new RuntimeException("not implemented");
    }



}
