# Assignment 4: Forms and Validation

Name: Yerali Karkinbayev

Group: IT-2501

This page have three forms. Open "index.html" in a browser, it works without internet. Nothing is sent or saved, this is just for checking the fields.

## Part 1: Basic HTML Forms

### Task 0: Contact Form

![Contact form](screenshots/task0.jpg)

A simple form with Name, Email, Message and a Submit button. Each label is connected to its field using for and id.

### Task 1: Browser Validation

![Wrong email](screenshots/task1.jpg)

I added required to all three fields and type="email" to Email. Name can have up to 50 characters, Email 100 and Message 500. If a field is empty or the email is wrong, the browser stops the form.

## Part 2: Bootstrap Forms

### Task 2: Bootstrap Contact Form

![Bootstrap contact form](screenshots/task2.jpg)

Here I used Bootstrap Grid to arrange the fields. The labels use form-label, the fields use form-control and the button uses btn. I also added placeholders and short hints with form-text.

### Task 3: Wrong Input

![Contact form with errors](screenshots/task3-invalid.jpg)

### Task 3: Correct Input

![Contact form filled correctly](screenshots/task3-valid.jpg)

After clicking Submit, JavaScript adds is-valid or is-invalid to the fields. If I fix the input, the colour and message change too.

## Part 3: Advanced Form Project

### Task 4: Registration with Errors

![Registration errors](screenshots/task4-invalid.jpg)

### Task 4: Correct Registration Input

![Registration filled correctly](screenshots/task4-valid.jpg)

### Task 4: Phone Layout

![Registration on a phone](screenshots/task4-mobile.jpg)

This form has first and last name, email, password, confirm password, gender, hobbies and country. The password needs at least 8 characters and both passwords must be the same. Hobbies are optional, so more than one can be selected or none. Reset clear the fields and removes the validation colours and messages.

## Work Process

First I made the forms in HTML. Then I used Bootstrap for the last two forms and added the checks in "js/validation.js". I tried empty fields, wrong emails, length limits and different passwords, then checked correct input and Reset. I checked the page at 320px, 768px and 1280px for phone, tablet and computer. The screenshots above are from these forms.


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
