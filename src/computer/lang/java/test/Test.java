import java.io .*;

/**
 * https://www.cnblogs.com/kelelipeng/p/11599840.html
 */
public class Test {
    static class TestRunnable implements Runnable {
        public void run() {
            try {
                Thread.sleep(1000);//守护线程阻塞1秒后运行
                File f = new File("daemon.txt");
                FileOutputStream os = new FileOutputStream(f, true);
                os.write("daemon".getBytes());
            } catch (IOException e1) {
                e1.printStackTrace();
            } catch (InterruptedException e2) {
                e2.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {
        System.out.println("start");
        Runnable tr = new TestRunnable();
        Thread thread = new Thread(tr);
        // 尝试着注释掉下面的代码，设置守护线程
        // thread.setDaemon(true);
        thread.start(); //开始执行分进程
        System.out.println("end");
    }
}
