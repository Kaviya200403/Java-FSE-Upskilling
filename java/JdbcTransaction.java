import java.sql.*;

public class JdbcTransaction {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/bank";
        String user = "root";
        String password = "password";
        
        try (Connection conn = DriverManager.getConnection(url, user, password)) {
            conn.setAutoCommit(false);
            
            try {
                // Transfer $100 from account 1 to 2
                PreparedStatement withdraw = conn.prepareStatement(
                    "UPDATE accounts SET balance = balance - 100 WHERE id = 1");
                withdraw.executeUpdate();
                
                PreparedStatement deposit = conn.prepareStatement(
                    "UPDATE accounts SET balance = balance + 100 WHERE id = 2");
                deposit.executeUpdate();
                
                conn.commit();
                System.out.println("Transaction completed");
            } catch (SQLException e) {
                conn.rollback();
                System.out.println("Transaction rolled back");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}