const { response } = require('express');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('<h1>Hello World!!!!</h1>');
  // console.log(request);
});

app.get("/contact", function (req, res) {
  res.send('<h1>Contact me at: jeff.trusty@gmail.com</h1>');
});

app.get('/about', function (req, res) {
  res.send(`
    <table cellspacing="20">
      <tr>
        <td>
        </td>
        <td>
          <h1>Jeff's Personal Site</h1>
          <p><em>Sr Systems Management Analyst</em></p>
          <p>
            I am a senior systems analyst for Optum. <br />I support Optum's
            internal financial applications AccPac and Peoplesoft ERP
          </p>
        </td>
      </tr>
    </table>
    <hr />
    <h3><strong>Education:</strong></h3>
    <ul>
      <li>Udemy Courses:</li>
      <ul>
        <li>
          <a
            href="https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/"
            >Complete Guide course (Completed)</a
          >
        </li>
        <li>
          <a href="https://www.udemy.com/course/nodejs-the-complete-guide/"
            >NodeJS-The Complete Guide course (In Progress)</a
          >
        </li>
        <li>CSS-The Complete Guide course (In Progress)</li>
        <li>The Complete 2020 Web Development Bootcamp (In Progress)</li>
        <li>TypeScript Fast Crash Course (In Progress)</li>
        <li>The Bootstrap 4 Bootcamp (In Progress)</li>
        <li>
          The Complete JavaScript Course 2020: Build Real Projects (In Progress)
        </li>
        <li>Learning Windows PowerShell (Completed)</li>
        <li>Angular Tutorial for Beginners (In Progress)</li>
        <li>Git & GitHub Complete Masterclass (Completed)</li>
        <li>
          Excel Essentials: The Complete Excel Series Level 1, 2, & 3
          (Completed)
        </li>
        <li>Learn Visual Studio Code (Completed)</li>
        <li>Visual Studio Code (Completed)</li>
      </ul>
      <li>Multiple YouTube video's on web development</li>
      <li>East High School, Salt Lake City, Utah</li>
    </ul>
    <hr />
`);
});

app.listen(3000, function () {
  console.log('server started on 3000');
});
