# Assignment 4: Forms and Validation

Name: Yerali Karkinbayev

Group: IT-2501

Open "index.html" in a browser. All files are local, so internet is not needed. The forms only check input; they do not send or save data.

## Part 1: Basic HTML Forms

### Task 0: Contact Form

![Contact form](screenshots/task0.jpg)

Name, Email and Message have labels linked to their fields.

### Task 1: HTML5 Validation

![Browser email validation](screenshots/task1.jpg)

All three fields are required. Email uses type="email". The maximum lengths are 50 characters for Name, 100 for Email and 500 for Message. The browser blocks empty fields and an incorrect email.

## Part 2: Bootstrap Forms

### Task 2: Styled Contact Form

![Bootstrap contact form](screenshots/task2.jpg)

The form uses Bootstrap Grid, form-label, form-control, form-text and btn classes, with placeholders and helper text.

### Task 3: Invalid Input

![Invalid contact form](screenshots/task3-invalid.jpg)

### Task 3: Valid Input

![Valid contact form](screenshots/task3-valid.jpg)

After Submit, JavaScript applies is-valid or is-invalid. Feedback updates when the input changes.

## Part 3: Advanced Form Project

### Task 4: Invalid Registration

![Invalid registration](screenshots/task4-invalid.jpg)

### Task 4: Valid Registration

![Valid registration](screenshots/task4-valid.jpg)

### Task 4: Mobile Layout

![Registration on a phone](screenshots/task4-mobile.jpg)

The form includes names, email, passwords, gender, hobbies and country. Passwords must match and contain at least 8 characters. Hobbies are optional and allow multiple choices. Reset clears the inputs and validation states.

## Work Process

I added the HTML fields and labels, styled the last two forms with Bootstrap, then added validation in "js/validation.js". I checked empty and valid inputs, incorrect emails, length limits, password matching and Reset. I also checked the layout at 320px, 768px and 1280px and saved the screenshots above.


<!--
Bootstrap v5.3.8 (https://getbootstrap.com/)

The MIT License (MIT)

Copyright (c) 2011-2025 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
-->
