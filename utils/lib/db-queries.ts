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