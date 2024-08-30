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

export async function createAdmissionsInfoTable(){
    await sql`CREATE TABLE IF NOT EXISTS admissions_info (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        is_applications_open varchar(255) DEFAULT 'no',
        opening_date varchar(255) NOT NULL,
        closing_date varchar(255) NOT NULL,
        max_grade_8 int NOT NULL,
        grade_8_classes int NOT NULL,
        max_grade_9 int NOT NULL,
        grade_9_classes int NOT NULL,
        max_grade_10a int NOT NULL,
        max_grade_10b int NOT NULL,
        max_grade_10c int NOT NULL,
        max_grade_10d int NOT NULL,
        max_grade_11a int NOT NULL,
        max_grade_11b int NOT NULL,
        max_grade_11c int NOT NULL,
        max_grade_11d int NOT NULL
    )`
}

export async function insertIntoAdmissionsInfo(){
    await sql`INSERT INTO admissions_info ( is_applications_open, opening_date, closing_date,
                max_grade_8, grade_8_classes, max_grade_9, grade_9_classes,
                max_grade_10a, max_grade_10b, max_grade_10c, max_grade_10d,
                max_grade_11a, max_grade_11b, max_grade_11c, max_grade_11d
            ) VALUES ( 'no', '01/03/2024', '01/06/2024', 250, 5, 30, 5,
            10, 10, 10, 10, 5, 5, 5, 5
        )`
}

export async function updateAdmissionsInfo(formData: any){
    await sql`UPDATE admissions_info
            SET is_applications_open=${formData.is_applications_open}, opening_date=${formData.opening_date}, 
                closing_date=${formData.closing_date}, max_grade_8=${formData.max_grade_8}, 
                grade_8_classes=${formData.grade_8_classes}, max_grade_9=${formData.max_grade_9}, 
                grade_9_classes=${formData.grade_9_classes}, max_grade_10a=${formData.max_grade_10a}, 
                max_grade_10b=${formData.max_grade_10b}, max_grade_10c=${formData.max_grade_10c},
                max_grade_10d=${formData.max_grade_10d}, max_grade_11a=${formData.max_grade_11a}, 
                max_grade_11b=${formData.max_grade_11b}, max_grade_11c=${formData.max_grade_11c}, 
                max_grade_11d=${formData.max_grade_11d}
            WHERE id='85bd3148-cf28-40f3-8013-eba39a61c2c5'
    `
}