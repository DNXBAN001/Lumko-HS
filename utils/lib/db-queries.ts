"use server"
import { sql } from "@vercel/postgres"

export async function createLearnerInfoTable(){
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
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
export async function insertIntoAdmissionDates(){
    await sql`INSERT INTO admission_dates ( is_applications_open, opening_date, closing_date ) 
        VALUES ( 'no', '01/03/2024', '01/06/2024')`
}
export async function getAdmissionDates(){
    const {rows} = await sql`SELECT is_applications_open, opening_date, closing_date FROM admission_dates`
    return (rows.length > 0 ? rows[0]: "")
}
export async function updateAdmissionDates(formData: any){
    const response = await sql`UPDATE admission_dates
        SET is_applications_open=${formData?.is_applications_open}, opening_date=${formData?.opening_date},
            closing_date=${formData?.closing_date}
        WHERE id='eef3d510-b679-4a71-994b-c5d4c9178451'
    `
    return response.rows
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
             ( 'grade10C', 10, null), ( 'grade10D', 10, null), ( 'grade11A', 5, null), ( 'grade11B', 5, null), ( 'grade11C', 5, null), 
              ( 'grade11D', 5, null)
             `
}
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
    if(rows.length > 0){
        return rows
    }
    return []
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
    if(rows.length > 0){
        return rows
    }
    return []
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
