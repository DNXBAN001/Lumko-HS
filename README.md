## Status of the App and improvements that need to be made

## 1. Navbar - 06 Aug 2024 (02h26)
    - Choose nice font that matches well with the design
    - When screen size is small, toggled menu link-items must disappear once the user click on one of the link-items
    - Other than these i think Navbar is fine

## 2. Home Page - 07 Aug 2024 (03h53)
    - What We Offer Section: 
        - Implement the image slideshow

## 3. About Page - 07 Aug 2024 (23h48)
    - Update the Values content and remove the lorem ipsum

## 4. Admissions Page - 08 Aug 2024 (03h58)
    - Fix the layout of the steps and also make sure that the page is fully responsive
    08 Aug 2024 (16h48)
    - Add the information about not accepting grade 9 to 11 applications (specifically for Lumko HS)

## 5. Gallery Page - 09 Aug (23h18)
    - Download the gallery images , once I have the images then I can create json placeholder data
    - Implement the filter functionality to filter images by year and category

## 6. News Page

## 7. Staff Page - 09 Aug 2024 (18h20)
    - Get staff images, once I have the images then I can create json placeholder data 
    - Make sure the page is responsive 

## 8. Contact Page - 07 Aug 2024 (23h48)
    - Add Banking details to the page.
    - Also ask for a feedback from the client if there's anything else they would like to add or done diffently

## 9. Sign In Page - 19 Aug 2024 (23h11)
    - Consider converting input email to all lowerCase

## 10. Signup Page - 12 Aug 2024 (02h53)
    - Consider converting email to lowerCase when registering, save the lowercase version
    - Read more link: to allow user to read privacy policy before signing up

## 11. Forgot Password Page - 12 Aug 2024 (02h53)
    - Need to implement Forgot Password functionality

## 12. Application Page - 13 Aug 2024 (04h05)
    - Redirect user to /apply if the grade they are applying for is not currently being accepted say they 
    somehow manage to skip to /apply/fill-form
    - Implement document uploads
    - Verify form fields and give hints on the required form data
    - Change subjects based on the grade the applicant is applying for: Grade8/9 vs Grade 10/11

## 13. Admin Dashboard - 21 Aug 2024 (09h52)
    - On Overview, count applications by school from the mock data
    - On View Applications: - Sort applications list by descending average mark (from highest to lowest)
                            - Implement the accept and reject functionality, update the status and class fields
                            - Ensure that when the admin wants to view application by email you check either the learner's or mother's
                            email
    - On /admin/dashboard/view-applications/email
        - Display applicant's full application info, including the uploaded documents
        - Can verify and update the application, accept or reject
    - On Settings: - Admission by class is only saving updates after the second click of the Save button: fix the state issue

## 14. Add the Past Papers page




<!-- "next": "14.3.0-canary.59",
"react": "19.0.0-beta-4508873393-20240430",
"react-dom": "19.0.0-beta-4508873393-20240430", -->