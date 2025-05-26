public class VirtualThreadsExample {
    public static void main(String[] args) throws InterruptedException {
        int threadCount = 100_000;
        Thread[] threads = new Thread[threadCount];
        
        long start = System.currentTimeMillis();
        
        for (int i = 0; i < threadCount; i++) {
            int finalI = i;
            threads[i] = Thread.startVirtualThread(() -> {
                try {
                    Thread.sleep(1000);
                    System.out.println("Virtual thread " + finalI + " completed");
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            });
        }
        
        for (Thread thread : threads) {
            thread.join();
        }
        
        long duration = System.currentTimeMillis() - start;
        System.out.println("Completed " + threadCount + " virtual threads in " + duration + "ms");
    }
}