
const express = require('express');
const router = express.Router();
const db = require('../db');

// Create student
router.post('/register', (req, res) => {
  const { fullname, address, contactNumber, email, courseCodes } = req.body;

  const courseStr = courseCodes.join(',');

  const checkEmailSql = 'SELECT * FROM students WHERE email = ?';
  db.query(checkEmailSql, [email], (err, results) => {
    if (err) {
      console.error('Error checking email:', err);
      return res.status(500).json({ message: 'Database error' });
    }

    if (results.length > 0) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    const insertSql = `
      INSERT INTO students (fullname, address, contactNumber, email, courseCodes)
      VALUES (?, ?, ?, ?, ?)
    `;
    db.query(insertSql, [fullname, address, contactNumber, email, courseStr], (err, result) => {
      if (err) {
        console.error('Error inserting student:', err);
        return res.status(500).json({ message: 'Database error' });
      }
      res.status(201).json({ message: 'Student registered successfully' });
    });
  });
});



// Fetch students
router.get('/students', (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) {
      console.error('Error fetching students:', err);
      return res.status(500).json({ message: 'Database error' });
    }
    res.json(results);
  });
});


// Update student
router.put("/students/:id", (req, res) => {
    const { id } = req.params;
    const { fullname, address, contactNumber, email, courseCodes } = req.body;

    const courseStr = Array.isArray(courseCodes) ? courseCodes.join(',') : courseCodes;

    const checkEmailSql = "SELECT * FROM students WHERE email = ? AND id != ?";
    db.query(checkEmailSql, [email, id], (err, results) => {
        if (err) {
            console.error("Error checking email:", err);
            return res.status(500).json({ error: "Database error" });
        }

        if (results.length > 0) {
            return res.status(409).json({ error: "Email already in use by another student" });
        }

        const updateSql = `
            UPDATE students
            SET fullname = ?, address = ?, contactNumber = ?, email = ?, courseCodes = ?
            WHERE id = ?
        `;

        db.query(updateSql, [fullname, address, contactNumber, email, courseStr, id], (err, result) => {
            if (err) {
                console.error("Error updating student:", err);
                return res.status(500).json({ error: "Failed to update student" });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ error: "Student not found" });
            }

            res.status(200).json({ message: "Student updated successfully" });
        });
    });
});



// Delete student
router.delete('/students/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM students WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Error deleting student:', err);
      return res.status(500).json({ message: 'Database error' });
    }
    res.status(200).json({ message: 'Student deleted successfully' });
  });
});


module.exports = router;
