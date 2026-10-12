# Assignment 4: Forms and Validation

Name: Yerali Karkinbayev

Group: IT-2501

This page have three forms. Open "index.html" in a browser, it works without internet. It uses HTML, CSS and Bootstrap CSS, no JavaScript.

Submit runs the browser checks. The forms use method="dialog" without a dialog window, so they stay on the page and do not send a request. No messages or accounts are created.

## Part 1: Basic HTML Forms

### Task 0: Contact Form

![Contact form](screenshots/task0.jpg)

Name, Email, Message and a Submit button. Each label uses the same for value as its field's id.

### Task 1: Browser Validation

![Wrong email](screenshots/task1.jpg)

All three fields are required. Email uses type="email". The maximum lengths are 50 for Name, 100 for Email and 500 for Message. Empty fields and wrong emails are blocked by the browser.

## Part 2: Bootstrap Forms

### Task 2: Bootstrap Contact Form

![Bootstrap contact form](screenshots/task2.jpg)

I used Bootstrap Grid, form-label, form-control, form-text and btn. Name and Email are side by side from 768px, and stacked on a phone. The fields also have placeholders and short hints.

### Task 3: Bootstrap Class Examples

![Bootstrap class examples](screenshots/task3-classes.jpg)

These two read-only fields show is-valid and is-invalid. They are fixed examples of the classes, not checks of user input.

### Task 3: Wrong Input

![Contact form with errors](screenshots/task3-invalid.jpg)

### Task 3: Correct Input

![Contact form filled correctly](screenshots/task3-valid.jpg)

The working form uses was-validated. Bootstrap CSS reads the browser's valid and invalid states, so colours and feedback change with the input. Empty required fields are red from the start.

## Part 3: Advanced Form Project

### Task 4: Registration with Errors

![Registration errors](screenshots/task4-invalid.jpg)

### Task 4: Correct Registration Input

![Registration filled correctly](screenshots/task4-valid.jpg)

### Task 4: Phone Layout

![Registration on a phone](screenshots/task4-mobile.jpg)

The form has first and last name, email, password, confirm password, gender, hobbies and country. Both password fields are required and need at least 8 characters. Their values are not compared. Hobbies are optional and allow several choices.

Reset clear the fields and selections. The form returns to its starting state, where empty required fields are red.

## Work Process

First I made the fields and labels in HTML, then used Bootstrap to arrange the last two forms. I checked empty fields, email format, length limits, radio buttons, checkboxes, country and Reset. I also checked the layout at 320px, 768px and 1280px. The screenshots are from the finished page.

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
