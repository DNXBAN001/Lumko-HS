"use server"
import { sql } from "@vercel/postgres"

/**
 * Creat learner info table
 */
export async function createLearnerInfoTable(){
    // await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
    await sql`CREATE TABLE IF NOT EXISTS learnerInfo (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        firstName varchar(255) NOT NULL,
        lastName varchar(255) NOT NULL,
        id_number varchar(255) NOT NULL,
        dob varchar(255) NOT NULL,
        email varchar(255),
        phone varchar(255) NOT NULL,
        present_school varchar(255) NOT NULL,
        previous_schools varchar(255),
        year_of_previous_schools varchar(255),
        home_language varchar(255) NOT NULL, 
        religion varchar(255) NOT NULL, 
        physical_address varchar(255) NOT NULL, 
        other_achievements varchar(255),
        grade_applying_for varchar(255) NOT NULL,
        class varchar(255),
        status varchar(255) DEFAULT 'pending',
        userId varchar(255) NOT NULL,
        created_at timestamp DEFAULT now() NOT NULL
    );`
}
/**
 * Create marks info table
 */
export async function createMarksTable(){
    await sql`CREATE TABLE IF NOT EXISTS marks (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        english int NOT NULL,
        isixhosa int,
        afrikaans int,
        mathematics int NOT NULL,
        life_orientation int NOT NULL,
        natural_sciences int NOT NUL,
        creative_arts int NOT NULL,
        economic_management_sciences int NOT NULL,
        social_sciences int NOT NULL,
        technology int NOT NULL,
        average_mark int NOT NULL,
        userId varchar(255) NOT NULL,
        created_at timestamp DEFAULT now() NOT NULL
    );`
}
/**
 * Create medical info table
 */
export async function createMedicalInfoTable(){
    await sql`CREATE TABLE IF NOT EXISTS medical_info (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        medical_aid_number varchar(255),
        medical_aid_name varchar(255),
        main_member varchar(255),
        doctor_name varchar(255),
        doctor_phone varchar(255),
        medical_condition varchar(255),
        special_problems varchar(255),
        receiving_social_grant varchar(255) NOT NULL, 
        dexterity_of_learner varchar(255) NOT NULL, 
        userId varchar(255) NOT NULL,
        created_at timestamp DEFAULT now() NOT NULL
    );`
}
/**
 * Create mother info table
 */
export async function createMotherInfoTable(){
    await sql`CREATE TABLE IF NOT EXISTS mother_info (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title varchar(255) NOT NULL,
        firstName varchar(255) NOT NULL,
        lastName varchar(255) NOT NULL,
        id_number varchar(255) NOT NULL,
        marital_status varchar(255) NOT NULL,
        email varchar(255),
        phone varchar(255) NOT NULL,
        occupation varchar(255) NOT NULL,
        employer varchar(255) NOT NULL,
        physical_address varchar(255) NOT NULL, 
        postal_address varchar(255),
        userId varchar(255) NOT NULL,
        created_at timestamp DEFAULT now() NOT NULL
    );`
}
/**
 * Create father info table
 */
export async function createFatherInfoTable(){
    await sql`CREATE TABLE IF NOT EXISTS father_info (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title varchar(255),
        firstName varchar(255),
        lastName varchar(255),
        id_number varchar(255),
        marital_status varchar(255),
        email varchar(255),
        phone varchar(255),
        occupation varchar(255),
        employer varchar(255),
        physical_address varchar(255), 
        postal_address varchar(255),
        userId varchar(255) NOT NULL,
        created_at timestamp DEFAULT now() NOT NULL
    );`
}
/**
 * Create supporting documents table
 */
export async function createSupportingDocumentsTable(){
    await sql`CREATE TABLE IF NOT EXISTS supporting_documents (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        learner_birth_certificate varchar(255) NOT NULL, 
        mother_id varchar(255) NOT NULL, 
        latest_report varchar(255) NOT NULL, 
        proof_of_residence varchar(255) NOT NULL, 
        learner_face_photo varchar(255) NOT NULL, 
        userId varchar(255) NOT NULL,
        created_at timestamp DEFAULT now() NOT NULL);`
}

/**
 * Table containing the opening and closing date for applications
 */
export async function createAdmissionDatesTable(){
    await sql`CREATE TABLE IF NOT EXISTS admission_dates (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        is_applications_open varchar(255) DEFAULT 'no',
        opening_date varchar(255) NOT NULL,
        closing_date varchar(255) NOT NULL,
        created_at timestamp DEFAULT now() NOT NULL
        )`
}

/**
 * Insert admission dates and whether or not applications are currently open
 */
export async function insertIntoAdmissionDates(){
    await sql`INSERT INTO admission_dates ( is_applications_open, opening_date, closing_date ) 
        VALUES ( 'no', '01/03/2024', '01/06/2024')`
}
/**
 * 
 * @returns is_applications_open, opening_date, and closing_date
 */
export async function getAdmissionDates(){
    const {rows} = await sql`SELECT is_applications_open, opening_date, closing_date FROM admission_dates`
    return (rows.length > 0 ? rows[0]: "")
}
/**
 * 
 * @param formData - is_applications_open, opening_date, and closing_date
 */
export async function updateAdmissionDates(formData: any){
    await sql`UPDATE admission_dates
        SET is_applications_open=${formData?.is_applications_open}, opening_date=${formData?.opening_date},
            closing_date=${formData?.closing_date}
        WHERE id='eef3d510-b679-4a71-994b-c5d4c9178451'  
    `
}

/**
 * Table containing max intake for each grade and class
 */
export async function createAdmissionByClassTable(){
    await sql`CREATE TABLE IF NOT EXISTS admission_by_class (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        class_grade varchar(255) NOT NULL,
        max_intake int NOT NULL,
        total_classes int,
        created_at timestamp DEFAULT now() NOT NULL
    )`
}
export async function insertIntoAdmissionByClass(){
    await sql`INSERT INTO admission_by_class ( class_grade, max_intake, total_classes
            ) VALUES ( 'grade8', 250, 5), ( 'grade9', 50, 5), ( 'grade10A', 10, null), ( 'grade10B', 10, null),
            ( 'grade10C', 10, null), ( 'grade10D', 10, null), ( 'grade11A', 5, null), ( 'grade11B', 5, null), 
            ( 'grade11C', 5, null), ( 'grade11D', 5, null)
             `
}
/**
 * 
 * @returns class_grade, max_intake, total_classes
 */
export async function getAdmissionByClass(){
    const { rows } = await sql`SELECT class_grade, max_intake, total_classes FROM admission_by_class`
    return (rows.length > 0 ? rows: "")
}
export async function updateAdmissionByClass(formData: any){
    const response = await sql`UPDATE admission_by_class
            SET max_intake=${formData?.max_intake}, 
                total_classes=${formData?.total_classes}
            WHERE class_grade=${formData?.class_grade}
    `
    return response.rows
}

/**
 * Get application if exists
 */
export async function applicationExist(userId: string){
    const {rows} = await sql`SELECT status FROM learner_info WHERE userId=${userId}` 
    console.log(rows)
    if(rows.length > 0){
        return true
    }
    return false
}

/**
 * Get applications received by grade: ordered by average mark in descending order
 */
export async function getApplicationsByClass(class_grade: string){
    const {rows} = await sql`SELECT learner_info.userid, learner_info.firstname, learner_info.lastname, learner_info.email,
            learner_info.status, learner_info.class, learner_info.grade_applying_for, learner_info.created_at, marks.average_mark
        FROM learner_info
        JOIN marks ON learner_info.userId = marks.userId AND grade_applying_for = ${class_grade}
        ORDER BY marks.average_mark DESC`

    return rows
}
/**
 * Get applications received by grade and admission status: ordered by average mark in descending order
 */
export async function getApplicationsByClassAndStatus(class_grade: string, status: string){
    const {rows} = await sql`SELECT learner_info.userid, learner_info.firstname, learner_info.lastname, learner_info.email, 
            learner_info.status, learner_info.class, learner_info.grade_applying_for, learner_info.created_at, marks.average_mark
        FROM learner_info
        JOIN marks ON learner_info.userId = marks.userId AND grade_applying_for = ${class_grade} AND status = ${status}
        ORDER BY marks.average_mark DESC`
    
    return rows
}
/**
 * Update applicant admission status
 */
export async function updateAdmissionStatus(applicantId: string, decision: string){
    await sql`UPDATE learner_info SET status=${decision} WHERE userId=${applicantId}`
}
/**
 * Update class allocated to the applicant
 */
export async function updateClassAllocatedToApplicant(applicantId: string, allocatedClass: string){
    await sql`UPDATE learner_info SET class=${allocatedClass} WHERE userId=${applicantId}`
}
/**
 * Get applicant info by applicant id
 */
export async function getLearnerInfo(applicantId: string){
    const { rows } = await sql`SELECT * FROM learner_info WHERE userid=${applicantId}` 
    return rows
}
/**
 * Get learner marks by applicant id
 */
export async function getLearnerMarks(applicantId: string){
    const { rows } = await sql`SELECT * FROM marks WHERE userid=${applicantId}` 
    return rows
}
/**
 * Get learner medical info by applicant id
 */
export async function getMedicalInfo(applicantId: string){
    const { rows } = await sql`SELECT * FROM medical_info WHERE userid=${applicantId}` 
    return rows
}
/**
 * Get mother info by applicant id
 */
export async function getMotherInfo(applicantId: string){
    const { rows } = await sql`SELECT * FROM mother_info WHERE userid=${applicantId}` 
    return rows
}
/**
 * Get father info by applicant id
 */
export async function getFatherInfo(applicantId: string){
    const { rows } = await sql`SELECT * FROM father_info WHERE userid=${applicantId}` 
    return rows
}

/**
 * Get total number of applications received
 */
export async function getTotalApplicationsCount(){
    const {rows} = await sql`SELECT count(*) FROM learner_info`
    return rows
}

/**
 * Get total count of applications for each grade 
 */
export async function getApplicationsCountByGrade(){
    const {rows} = await sql`SELECT grade_applying_for, COUNT(grade_applying_for) FROM learner_info
            GROUP BY grade_applying_for`

    return rows
}

/**
 * Get application count by schools: Order by count in descending order 
 * (from school that has more applications to the least school)
 */
export async function getApplicationCountBySchool(){
    const {rows} = await sql`SELECT present_school, COUNT(present_school) FROM learner_info
            GROUP BY present_school
            ORDER BY count DESC`

    return rows
}
/**
 * Save learner info
 */
export async function saveLearnerInfo(formData: any, userId: string){
    await sql`INSERT INTO learner_info (firstName, lastName, id_number, dob, email, phone, present_school, 
    previous_schools, year_of_previous_schools, home_language, religion, physical_address, other_achievements,
    grade_applying_for, userId) 
    VALUES (${formData.learnerInfo.firstName}, ${formData.learnerInfo.lastName}, ${formData.learnerInfo.idNumber},
    ${formData.learnerInfo.dateOfBirth}, ${formData.learnerInfo.email}, ${formData.learnerInfo.phone},
    ${formData.learnerInfo.presentSchool}, ${formData.learnerInfo.previousSchools}, ${formData.learnerInfo.yearOfPreviousSchools},
    ${formData.learnerInfo.homeLanguage}, ${formData.learnerInfo.religion}, ${formData.learnerInfo.physicalAddress},
    ${formData.learnerInfo.otherAchievements}, ${formData.learnerInfo.gradeApplyingFor}, ${userId});`
}
/**
 * Save marks info
 */
export async function saveMarksInfo(formData: any, averageMark: string,userId: string){
    await sql`INSERT INTO marks (english, isixhosa, afrikaans, mathematics, life_orientation, natural_sciences, creative_arts, 
    economic_management_sciences, social_sciences, technology, average_mark, userId)
    VALUES (${formData.marks.english}, ${formData.marks.isixhosa}, ${formData.marks.afrikaans}, ${formData.marks.mathematics},
    ${formData.marks.LO}, ${formData.marks.ns}, ${formData.marks.creativeArts}, ${formData.marks.ems}, ${formData.marks.ss},
    ${formData.marks.tech}, ${averageMark}, ${userId})`
}
/**
 * Save medical info
 */
export async function saveMedicalInfo(formData: any, userId: string){
    await sql`INSERT INTO medical_info (medical_aid_number, medical_aid_name, main_member, doctor_name, doctor_phone,
    medical_condition, special_problems, receiving_social_grant, dexterity_of_learner, userId)
    VALUES (${formData.medicalInfo.medicalAidNumber}, ${formData.medicalInfo.medicalAidName}, 
    ${formData.medicalInfo.medicalAidMainMember}, ${formData.medicalInfo.nameOfDoctor},${formData.medicalInfo.doctorContactNumber},
    ${formData.medicalInfo.medicalCondition}, ${formData.medicalInfo.specialProblems}, ${formData.medicalInfo.receivingSocialGrant}, 
    ${formData.medicalInfo.dexterityOfLearner}, ${userId})`
}
/**
 * Save mother info
 */
export async function saveMotherInfo(formData: any, userId: string){
    await sql`INSERT INTO mother_info (title, firstName, lastName, id_number, marital_status, email, phone, occupation, employer,
    physical_address, postal_address, userId)
    VALUES (${formData.motherInfo.title}, ${formData.motherInfo.firstName}, ${formData.motherInfo.lastName}, 
    ${formData.motherInfo.idNumber}, ${formData.motherInfo.maritalStatus}, ${formData.motherInfo.email}, 
    ${formData.motherInfo.phone}, ${formData.motherInfo.occupation}, ${formData.motherInfo.employer}, 
    ${formData.motherInfo.physicalAddress}, ${formData.motherInfo.postalAddress}, ${userId})`
}

/**
 * Save father info
 */
export async function saveFatherInfo(formData: any, userId: string){
    await sql`INSERT INTO father_info (firstName, lastName, id_number, marital_status, email, phone, occupation, employer,
    physical_address, postal_address, userId)
    VALUES (${formData.fatherInfo.firstName}, ${formData.fatherInfo.lastName}, ${formData.fatherInfo.idNumber}, 
    ${formData.fatherInfo.maritalStatus}, ${formData.fatherInfo.email}, ${formData.fatherInfo.phone}, 
    ${formData.fatherInfo.occupation}, ${formData.fatherInfo.employer}, ${formData.fatherInfo.physicalAddress},
    ${formData.fatherInfo.postalAddress}, ${userId})`
}
/**
 * Save blob URLs to the database
 */
export async function saveBlobsToDB(documents: any, userId: string){
    await sql`INSERT INTO supporting_documents (learner_birth_certificate, 
        mother_id, latest_report, proof_of_residence, learner_face_photo, userId)
        VALUES (${documents.learner_birth_certificate}, ${documents.mother_id},
        ${documents.latest_report}, ${documents.proof_of_residence}, ${documents.learner_face_photo}, ${userId})`
}
