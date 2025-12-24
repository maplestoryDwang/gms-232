package net.swordie.orm.migration;

/**
 * Created on 02/06/2021.
 *
 * @author Asura
 */
public class MigrationResult {
    private boolean success;
    private int successfulExecutes;
    private String failureScript;

    public MigrationResult(boolean success, int successfulExecutes, String failureScript) {
        this.success = success;
        this.successfulExecutes = successfulExecutes;
        this.failureScript = failureScript;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public int getSuccessfulExecutes() {
        return successfulExecutes;
    }

    public void setSuccessfulExecutes(int successfulExecutes) {
        this.successfulExecutes = successfulExecutes;
    }

    public String getFailureScript() {
        return failureScript;
    }

    public void setFailureScript(String failureScript) {
        this.failureScript = failureScript;
    }
}
