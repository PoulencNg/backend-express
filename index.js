const express = require('express'); // Import Express
const app = express(); // Tạo một ứng dụng Express
const port = 3001; // Đặt cổng mà ứng dụng sẽ lắng nghe

// Định nghĩa một route cho đường dẫn gốc "/"
app.get('/', (req, res) => {
  res.send('Training Express');
});

// Lắng nghe kết nối đến cổng 3000
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
